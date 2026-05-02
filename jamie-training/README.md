# Jamie Daily Practice / Jamie 每日训练

This static GitHub Pages site gives Jamie a bilingual daily home-training plan for May 2026.

这个静态 GitHub Pages 网站用于 Jamie 2026 年 5 月家庭训练：每天自动加载不同教案，爸妈可以逐项打卡并记录表现。

## What It Includes / 包含内容

- Daily bilingual training plan from 2026-05-04 to 2026-05-31.
- 每天 5 个训练项，覆盖安全调节、沟通语言、Prep 学习、精细动作与自理。
- Each task includes a visual icon, goal, steps, materials, adult script, status, support level, minutes, successes, chances, and notes.
- 每项包含图示、目标、步骤、材料、成人话术、完成状态、辅助程度、分钟数、成功次数、机会次数和备注。
- Daily metrics for STOP, initiations, core-word modelling, table time, drink/toilet routines, reinforcers, and risk notes.
- 每日指标记录 STOP、主动沟通、核心词建模、桌面时长、喝水/如厕、强化物和风险备注。

## Record Storage / 记录保存

Records are saved in the current browser using `localStorage`. Use **Export JSON** for backup and **Import JSON** to restore records on another browser. Use **Export CSV** for review or sharing with therapists/teachers.

记录保存在当前浏览器的 `localStorage` 里。请定期用 **Export JSON / 导出JSON** 备份；换浏览器或设备时可用 **Import JSON / 导入JSON** 恢复。**Export CSV / 导出CSV** 适合给老师、治疗师或家人复盘。

## GitHub Sync / GitHub 同步

The app can also sync records to a GitHub file through the GitHub Contents API.

网站也可以通过 GitHub Contents API 把记录同步到 GitHub 文件。

Recommended setup / 推荐设置：

1. Create a private GitHub repo for Jamie's records, for example `jamie-training-data`.
2. Create a fine-grained GitHub token with **Contents: Read and write** permission for that private repo only.
3. On each adult's device, open the site and fill in **Owner / Repo / Branch / Path / Token**, then turn on **Auto sync**.
4. Use the same repo/path on every device. The app pulls remote updates every 30 seconds and merges fields by latest timestamp.

1. 建议新建一个私有 GitHub 仓库，例如 `jamie-training-data`，专门保存 Jamie 记录。
2. 创建 fine-grained GitHub token，只给这个私有仓库 **Contents: Read and write** 权限。
3. 爸爸、妈妈、老师每台设备打开网站后填写 **Owner / Repo / Branch / Path / Token**，开启 **Auto sync / 自动同步**。
4. 所有设备使用同一个 repo/path。网站每 30 秒拉取远端更新，并按字段更新时间合并，减少互相覆盖。

Privacy / 隐私：

If you sync to this public website repo, the record file will be public. Use a private repo for real notes about Jamie.

如果同步到当前公开网站仓库，记录文件也会公开。Jamie 的真实训练备注建议放在私有仓库。

## Jamie Image / Jamie 形象

The default image is a privacy-safe Jamie-inspired illustration. A local photo can be uploaded on each device, but it is stored only in that browser and is not committed to GitHub.

默认头像是隐私友好的 Jamie 风格插画。每台设备可以本机上传真实照片，但照片只保存在该浏览器，不会提交到 GitHub。

## Evidence Base / 科学依据

The daily plan is designed around:

- Queensland Prep expectations: play-based learning, independence, confidence, language, early literacy/numeracy, problem solving, and physical abilities.
- Australian Curriculum Foundation priorities: number-name-numeral-quantity links, subitising, patterns, shapes, oral language, story retell, and everyday inquiry.
- Autism CRC National Guideline principles: individualised goals, child/family partnership, safe and desirable supports, monitoring progress, and reducing family burden.
- Evidence-based autism practices: visual supports, prompting and prompt fading, reinforcement, naturalistic intervention, functional communication, AAC modelling, and parent-mediated routines.
- Jamie-specific school/therapy notes: STOP safety, AAC/core words, low-sensory regulation, transitions, toileting/drinking routines, movement input, fine-motor participation, and Daily Talk.

每日计划主要依据：

- Queensland Prep 要求：游戏化学习、独立性、自信、语言、早期读写/数学、问题解决和身体能力。
- Australian Curriculum Foundation：数字名-数字符号-数量连接、快速数量、模式、形状、口语、故事复述和生活探索。
- Autism CRC 澳大利亚国家指南：个别化目标、儿童与家庭合作、安全且可接受的支持、进展监测、减少家庭负担。
- ASD 实证做法：视觉支持、辅助与辅助撤销、强化、自然情境教学、功能沟通、AAC 建模、家长介入 routine。
- Jamie 个别材料：STOP 安全、AAC/核心词、低刺激调节、转换、如厕/喝水、运动输入、精细动作参与和 Daily Talk。

Key references / 主要参考：

- Queensland Government: Learning in Prep - https://www.qld.gov.au/education/earlychildhood/prep/learning
- Autism CRC: National Guideline for supporting autistic children and families - https://www.autismcrc.com.au/best-practice/supporting-children/guideline/summaries
- Autism CRC: Interventions evidence synthesis - https://www.autismcrc.com.au/interventions-evidence
- Raising Children Network: Visual schedules and supports - https://raisingchildren.net.au/autism/therapies-guide/visual-supports
- Hanen: More Than Words guidebook - https://www.hanen.org/shop/more-than-words-guidebook
- Australian Curriculum Foundation parent information - https://v9.australiancurriculum.edu.au/downloads/parent-information

## Hosting / 上线

The repository's GitHub Pages workflow copies this folder to:

`/jamie-training/`

Expected public URL:

`https://taotao1992.github.io/ai-evolution-atlas/jamie-training/`
