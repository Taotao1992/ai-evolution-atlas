#!/usr/bin/env node
/* Cross-check the independent data collections and deployment references. */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'assets/app/course.js'), 'utf8');
const names = ['timelineItems','frontierItems','lifecycleStages','labItems','libraryItems','watchItems','courseWeeks','assignmentBriefs'];
const data = vm.runInNewContext(source.slice(0, source.indexOf('const state =')) + '; ({' + names.join(',') + '})');
const errors = [];
for (const [name, collection] of Object.entries(data)) {
  if (new Set(collection.map(item=>item.id)).size !== collection.length) errors.push('Duplicate id in ' + name);
  for (const item of collection) {
    for (const link of [...(item.links || []), ...(item.url ? [{url:item.url}] : [])]) {
      try { if (!['https:', 'http:'].includes(new URL(link.url).protocol)) throw Error(); }
      catch { errors.push('Invalid URL in ' + name + ':' + item.id); }
    }
    if (item.image && !fs.existsSync(path.join(root,item.image))) errors.push('Missing image: ' + item.image);
  }
}
const library = new Set(data.libraryItems.map(item=>item.id));
const assignments = new Set(data.assignmentBriefs.map(item=>item.id));
for (const week of data.courseWeeks) {
  for (const id of week.readings) if (!library.has(id)) errors.push('Unknown reading ' + id + ' in ' + week.id);
  if (week.assignmentId && !assignments.has(week.assignmentId)) errors.push('Unknown project in ' + week.id);
}
for (const item of data.assignmentBriefs) {
  for (const id of item.resources) if (!library.has(id)) errors.push('Unknown project resource ' + id);
  const sum = item.rubric.reduce((sum, [, points])=>sum+Number(points),0);
  if (sum !== 100) errors.push('Rubric is not 100 points: ' + item.id);
}
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if (new Set(ids).size !== ids.length) errors.push('Duplicate static DOM id');
for (const [,ref] of html.matchAll(/(?:src|href)="(\.\/[^"#?]+)(?:\?[^"#]*)?"/g)) {
  if (!fs.existsSync(path.join(root,ref))) errors.push('Missing HTML reference: ' + ref);
}
for (const [,ref] of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.includes(ref) && !ref.startsWith('assignment-')) errors.push('Unknown route anchor ' + ref);
}
for (const [,selector] of source.matchAll(/document\.querySelector\("#([\w-]+)"\)/g)) {
  if (!ids.includes(selector)) errors.push('Missing required DOM element #' + selector);
}
const manifest = JSON.parse(fs.readFileSync(path.join(root,'assets/app/offline-assets.json')));
for (const ref of manifest) if (!fs.existsSync(path.join(root,ref))) errors.push('Missing offline file: ' + ref);
const tree = fs.readFileSync(path.join(root,'assets/history-tree.js'),'utf8');
for (const item of data.timelineItems) {
  const needle = item.id.includes('-') ? '"'+item.id+'":' : item.id+':';
  if (!tree.includes(needle)) errors.push('Unmapped tree landmark: ' + item.id);
}
if (/CSC2220/.test(html) || /CSC2220/.test(source)) errors.push('Old course identity remains in the live site');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(JSON.stringify({ok:true,collections:Object.fromEntries(Object.entries(data).map(([key,value])=>[key,value.length])),offlineAssets:manifest.length,checks:['unique ids','valid source URLs','reading and project references','100-point rubrics','local images','HTML references','route anchors','required DOM elements','offline files','tree landmark coverage','independent branding']},null,2));
