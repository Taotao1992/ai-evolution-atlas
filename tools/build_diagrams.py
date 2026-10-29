"""Deterministic, editable SVG concept plates for the history chapters."""
from pathlib import Path
from html import escape
import base64
import math
import textwrap
OUT=Path(__file__).resolve().parents[1]/'assets'/'diagrams';OUT.mkdir(exist_ok=True)
FONT=base64.b64encode((OUT.parent/'fonts'/'xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F.woff').read_bytes()).decode()
G='#dec789';B='#84c9d0';V='#c6a4f4';M='#bfd976';T='#e4ebe4';D='#899e9b'
def text(x,y,s,size=13,color=T,anchor='start'):
    return f'<text x="{x}" y="{y}" font-size="{max(16,size)}" fill="{color}" text-anchor="{anchor}">{escape(s)}</text>'
def line(x1,y1,x2,y2,color=G,width=1,extra=''):
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{width}" {extra}/>'
def rect(x,y,w,h,color=G,fill='none',r=4):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" stroke="{color}" stroke-opacity=".6" fill="{fill}"/>'
def circle(x,y,r,color=G,fill='#101c23'):
    return f'<circle cx="{x}" cy="{y}" r="{r}" stroke="{color}" fill="{fill}"/>'
def box(x,y,w,h,label,color=G,sub=None):
    return rect(x,y,w,h,color,'#122129')+text(x+w/2,y+h/2+(0 if sub else 6),label,18 if len(label)>14 else 19,color,'middle')+(text(x+w/2,y+h/2+22,sub,16,D,'middle') if sub else '')
def arrow(x1,y1,x2,y2,color=G):return line(x1,y1,x2,y2,color,1.3,'marker-end="url(#arrow)"')
def plate(id,title,body,caption):
    footer=''.join(text(30,290+i*23,row,16,D) for i,row in enumerate(textwrap.wrap(caption,85)))
    # Embed the same self-hosted face: image SVGs cannot inherit the page font.
    s=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 330" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(caption)}</desc><style>@font-face{{font-family:Manrope;src:url(data:font/woff;base64,{FONT}) format('woff');font-weight:400;}}</style><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10" fill="{G}"/></marker></defs><rect width="800" height="330" fill="#101b21"/><g font-family="Manrope,system-ui,sans-serif" font-weight="400">{text(30,35,title.upper(),18,G)}{line(30,53,770,53,'#263b3e')}{body}{line(30,264,770,264,'#263b3e')}{footer}</g></svg>'''
    (OUT/f'{id}.svg').write_text(s)
# 01 — Turing: a proposed evaluation, not an intelligence definition.
b=box(45,110,155,72,'Human judge',G,'observes text')+box(330,82,170,64,'Human',G)+box(330,164,170,64,'Machine',B)
b+=arrow(210,145,315,114)+arrow(210,151,315,197)+text(555,132,'Can the judge',19,T)+text(555,160,'tell them apart?',19,G)
plate('turing','1950 / The imitation game',b,'A proposed behavioral test. A test always leaves some abilities unmeasured.')
# 02 — Dartmouth
b=box(46,110,130,65,'Logic')+box(220,110,130,65,'Learning')+box(394,110,130,65,'Language')+box(568,110,180,65,'Computation')
b+=text(400,222,'A shared research agenda',20,G,'middle')
for x in [111,285,459,658]:b+=line(x,185,x,198,'#40544d')+line(x,198,400,198,'#40544d')
plate('dartmouth','1956 / Naming a field',b,'The proposal names a research ambition; it does not report a solved problem.')
# 03 — Symbolic reasoning
b=box(40,112,180,75,'Facts',G,'bird(tweety)')+box(308,112,195,75,'Rules',G,'bird(x) → animal(x)')+box(587,112,170,75,'Conclusion',M,'animal(tweety)')
b+=arrow(232,149,295,149)+arrow(515,149,573,149)
plate('symbolic-ai','1958–1980s / Explicit knowledge',b,'Schematic deduction: a represented fact and rule support a represented conclusion.')
# 04 — Neural network
b='';layers=[[105,160,215],[95,140,185,230],[117,192]];xs=[155,385,615]
for l in range(2):
    for y1 in layers[l]:
        for y2 in layers[l+1]:b+=line(xs[l],y1,xs[l+1],y2,'#365051',.7)
for i,ys in enumerate(layers):
    for y in ys:b+=circle(xs[i],y,10,G if i==0 else B if i==1 else V)
b+=text(155,80,'INPUT',10,D,'middle')+text(385,80,'HIDDEN',10,D,'middle')+text(615,80,'OUTPUT',10,D,'middle')+arrow(585,244,180,244)+text(385,235,'error gradients',10,G,'middle')
plate('backprop','1986 / Learn representations from error',b,'Forward computation produces an output; the chain rule propagates loss gradients backward.')
# 05 — Statistical learning
b=''
for i in range(22):
    x=90+(i*47%260);y=98+(i*31%140);b+=circle(x,y,3,B if x*.18+y<232 else G,B if x*.18+y<232 else G)
b+=line(70,238,375,238,'#365051')+line(70,238,70,75,'#365051')+line(90,245,355,164,T,1.2)
b+=box(470,110,245,75,'Fit → validate → test',G,'keep the test set held out')
plate('stat-ml','1990s–2000s / Generalize beyond examples',b,'Illustrative decision boundary. Model selection and final evaluation use different data.')
# 06 — Convolution layers
b=''
for i in range(5):
    x=65+i*135;h=130-i*18;w=65+i*4;y=157-h/2
    for j in range(3):b+=rect(x+j*5,y-j*5,w,h,B if i<2 else V,'#142630')
    if i<4:b+=arrow(x+w+22,155,x+122,155)
    b+=text(x+w/2,231,['pixels','edges','patterns','features','classes'][i],10,D,'middle')
plate('alexnet','2012 / Hierarchical visual representations',b,'Conceptual feature hierarchy; shapes are not AlexNet’s exact layer dimensions.')
# 07 — Go and search
b=''
for i in range(7):b+=line(65+i*24,84,65+i*24,228,'#927d55',.8)+line(65,84+i*24,209,84+i*24,'#927d55',.8)
for x,y,c in [(89,108,T),(113,108,'#17242a'),(137,132,T),(137,156,'#17242a'),(161,156,T),(113,180,'#17242a')]:b+=circle(x,y,10,G,c)
b+=arrow(250,153,330,153)+circle(520,100,12,G)
for x in [415,520,625]:
    b+=line(520,112,x,163,'#3d5958')+circle(x,175,10,B)
    for dx in [-35,35]:b+=line(x,185,x+dx,226,'#3d5958')+circle(x+dx,231,6,V)
b+=text(520,74,'policy + value + tree search',11,D,'middle')
plate('alphago','2016 / Learn where to search',b,'A policy guides candidate moves; a value estimate helps evaluate positions.')
# 08 — Attention
b=box(45,102,105,48,'Q',B)+box(45,167,105,48,'K',B)+arrow(165,126,270,150)+arrow(165,190,270,165)
for i in range(5):
    for j in range(5):b+=rect(305+j*19,105+i*19,16,16,'#57716b',f'rgba(222,199,137,{.1+((i*7+j*3)%10)/13})',1)
b+=text(352,227,'attention weights',10,D,'middle')+arrow(417,157,490,157)+box(510,127,100,60,'V',V)+arrow(625,157,680,157)+text(710,162,'mix',16,G,'middle')
plate('transformer','2017 / Context through attention',b,'Schematic: softmax(QKᵀ / √d) V. Multi-head attention repeats learned projections.')
# 09 — In-context learning
b=box(40,95,320,115,'Examples + a new input',B,'no weight update during prompting')+arrow(376,152,445,152)
for i,(word,w) in enumerate([('next',180),('possible',115),('token',65)]):
    y=95+i*45;b+=text(470,y+17,word,12,D)+rect(550,y,w,24,G,'#dec78930',2)
plate('gpt3','2020 / Tasks through context',b,'Illustrative next-token alternatives. Context changes predictions without changing trained weights.')
# 10 — Post-training
b=box(35,108,165,78,'Demonstrations',G,'supervised fine-tuning')+arrow(213,148,276,148)+box(290,108,190,78,'Preference feedback',V,'comparisons / rewards')+arrow(493,148,556,148)+box(570,108,195,78,'Assistant behavior',B,'evaluate on new tasks')
plate('generative-ai','2022 / Shape instruction-following behavior',b,'A conceptual RLHF workflow. Preference optimization has multiple implementations.')
# 11 — Agent loop
b=box(50,110,145,70,'Observe',B)+arrow(205,145,278,145)+box(290,110,155,70,'Choose action',V)+arrow(455,145,528,145)+box(540,110,190,70,'Use a tool',M)
b+=f'<path d="M635 192 V226 H123 V192" stroke="{G}" fill="none" marker-end="url(#arrow)"/>'+text(380,218,'result → state → next step',11,D,'middle')
plate('agents','2022–2024 / A model in an action loop',b,'Tools and observations change the environment and the context. Stop conditions bound the loop.')
# 12 — Reasoning / verification
b=box(35,125,110,60,'Problem')
for i in range(3):
    y=88+i*62;b+=arrow(157,155,270,y+20)+box(285,y,150,40,'candidate '+str(i+1),V)+arrow(447,y+20,548,155)
b+=box(565,125,190,60,'Check / select',M)
plate('reasoning','2024–2025 / Spend computation on an answer',b,'A schematic search-and-check strategy, not a claim about every reasoning model’s internals.')
# 13 — System as unit of study
b=box(35,105,155,85,'Multimodal input',B,'text · images · video')+arrow(205,147,265,147)+box(280,105,150,85,'Model + tools',V,'state · constraints')+arrow(445,147,505,147)+box(520,105,230,85,'Environment',M,'actions · observations')
b+=text(400,231,'Evaluate the configuration and the task together',12,G,'middle')
plate('multimodal-frontier','2025–2026 / Systems and interactive environments',b,'Generated worlds, physical simulations, and useful planning models need different evidence.')
print('Wrote',len(list(OUT.glob('*.svg'))),'editable concept plates.')
