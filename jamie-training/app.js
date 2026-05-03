(() => {
  const STORAGE_KEY = "jamie-training-records-v1";
  const SYNC_KEY = "jamie-training-github-sync-v1";
  const AVATAR_KEY = "jamie-training-avatar-v1";
  const AVATAR_MODE_KEY = "jamie-training-avatar-mode-v1";
  const AVATAR_OFFSET_KEY = "jamie-training-avatar-offset-v1";
  const AVATAR_ROTATION_KEY = "jamie-training-avatar-rotation-v1";
  const START_DATE = "2026-05-04";
  const END_DATE = "2026-05-31";
  const SYNC_DEBOUNCE_MS = 8000;
  const SYNC_POLL_MS = 30000;
  const AVATAR_PREVIEW_MS = 9000;
  const AVATAR_CLOCK_CHECK_MS = 60000;
  const DEFAULT_SYNC_CONFIG = {
    enabled: false,
    owner: "Taotao1992",
    repo: "ai-evolution-atlas",
    branch: "main",
    path: "jamie-training-data/records.json",
    token: ""
  };

  const bilingual = (en, zh) => `${en} / ${zh}`;
  const pair = (en, zh) => ({ en, zh, text: bilingual(en, zh) });

  const activityLibrary = {
    doorStop: activity({
      domain: "Safety / 安全",
      icon: "stop",
      color: "#fff0d7",
      minutes: 5,
      title: pair("Door STOP practice", "门口 STOP 练习"),
      goal: pair("Jamie stops at the door line with one adult cue and waits for 'go'.", "Jamie 听到一次成人提示后在门口线停下，并等待 go/走。"),
      steps: [
        pair("Put a red tape line one step before the door.", "在门前一步贴红色胶带线。"),
        pair("Walk together, say 'STOP', show palm, and gently block the path.", "一起走到线前，说 STOP/停，出示手掌，轻轻挡住去路。"),
        pair("Count '1, 2' with fingers, then say 'go' and open the door.", "用手指数 1, 2，然后说 go/走 并开门。"),
        pair("Repeat 5 chances. End with praise and a high-value activity.", "重复 5 次机会，最后用表扬和高价值活动结束。")
      ],
      materials: [
        pair("Red tape or paper line", "红色胶带或纸条"),
        pair("Door visual card", "门口视觉图卡"),
        pair("Small reward: bubbles, car, snack, or hug", "小奖励：泡泡、车、小零食或拥抱")
      ],
      script: pair("Stop. Wait. One, two. Go.", "停。等一下。1、2。走。")
    }),
    redLineStop: activity({
      domain: "Safety / 安全",
      icon: "stop",
      color: "#ffe7dc",
      minutes: 5,
      title: pair("Red-line STOP + wait", "红线 STOP + 等待"),
      goal: pair("Build the habit of stopping at a visual boundary before moving on.", "建立看到视觉边界就停下再继续的习惯。"),
      steps: [
        pair("Place two red lines: one at the hallway and one near the kitchen.", "放两条红线：一条在走廊，一条在厨房附近。"),
        pair("Invite Jamie to walk, run slowly, or push a toy car toward the line.", "邀请 Jamie 走、慢跑或推小车到红线。"),
        pair("Say 'STOP', wait two seconds, then offer 'go' or 'again'.", "说 STOP/停，等待 2 秒，再给 go/走 或 again/再来。"),
        pair("If he crosses, calmly reset to the start without extra language.", "如果越线，平静回到起点，减少额外语言。")
      ],
      materials: [
        pair("Two red tape lines", "两条红色胶带线"),
        pair("Toy car or favourite movement toy", "玩具车或喜欢的运动玩具"),
        pair("Timer or counting fingers", "计时器或手指数数")
      ],
      script: pair("Stop at red. Wait. Go.", "红线停。等一下。走。")
    }),
    carStop: activity({
      domain: "Safety / 安全",
      icon: "car",
      color: "#e8f4ff",
      minutes: 6,
      title: pair("Car-side STOP routine", "车边 STOP routine"),
      goal: pair("Jamie stays beside the car until an adult says 'go' or holds his hand.", "Jamie 在车边等待，直到成人说 go/走 或牵手。"),
      steps: [
        pair("Practice beside the parked car before real outings.", "真实出门前，先在停好的车旁练习。"),
        pair("Use the same words every time: 'STOP, hand, go'.", "每次用同样的话：STOP/停，hand/牵手，go/走。"),
        pair("Give a concrete job: hold the bag, hold the card, or touch the car.", "给一个具体任务：拿包、拿卡片或摸车门。"),
        pair("Reinforce immediately when he waits, even for one second.", "只要等了 1 秒也立刻强化。")
      ],
      materials: [
        pair("STOP card", "STOP 图卡"),
        pair("Small hand card or bracelet", "牵手图卡或手环"),
        pair("Car keys kept out of reach", "车钥匙放在够不到处")
      ],
      script: pair("Stop. Hand. Go.", "停。牵手。走。")
    }),
    parkStop: activity({
      domain: "Safety / 安全",
      icon: "tree",
      color: "#e9f8eb",
      minutes: 8,
      title: pair("Park line STOP", "公园边界 STOP"),
      goal: pair("Generalise STOP to a park path or playground boundary.", "把 STOP 泛化到公园小路或游乐场边界。"),
      steps: [
        pair("Choose one safe boundary, such as a path line or a tree.", "选择一个安全边界，比如小路边线或一棵树。"),
        pair("Walk toward it together and cue 'STOP' before Jamie reaches it.", "一起走向边界，在到达前提示 STOP/停。"),
        pair("Use 'go' for safe movement and 'wait' when checking the environment.", "安全时说 go/走，需要观察环境时说 wait/等。"),
        pair("Keep practice short and happy: 5 to 8 successful chances.", "练习短而愉快：5 到 8 次成功机会。")
      ],
      materials: [
        pair("Portable STOP card", "便携 STOP 图卡"),
        pair("Favourite outdoor activity", "喜欢的户外活动"),
        pair("Snack or water for reinforcement", "小零食或水作为强化")
      ],
      script: pair("Stop. Look. Go.", "停。看。走。")
    }),
    musicStop: activity({
      domain: "Regulation / 调节",
      icon: "music",
      color: "#f1eaff",
      minutes: 6,
      title: pair("Music stop-and-go", "音乐停走游戏"),
      goal: pair("Jamie pauses his body when the music stops and restarts on 'go'.", "音乐停时 Jamie 暂停身体，听到 go/走 后再动。"),
      steps: [
        pair("Play a favourite song for 10 to 15 seconds.", "播放喜欢的音乐 10 到 15 秒。"),
        pair("Pause the song, show palm, and say 'STOP'.", "暂停音乐，出示手掌，说 STOP/停。"),
        pair("Wait one or two seconds, then say 'go' and restart music.", "等待 1 到 2 秒，说 go/走 并重新播放。"),
        pair("Add 'fast/slow' only if Jamie stays regulated.", "如果 Jamie 状态稳定，再加入 fast/slow 快/慢。")
      ],
      materials: [
        pair("Phone or speaker", "手机或音箱"),
        pair("STOP hand card", "STOP 手掌图卡"),
        pair("Open space for movement", "安全活动空间")
      ],
      script: pair("Music. Stop. Wait. Go.", "音乐。停。等。走。")
    }),
    trafficStop: activity({
      domain: "Safety / 安全",
      icon: "traffic",
      color: "#fff4d9",
      minutes: 8,
      title: pair("Traffic-light body game", "红绿灯身体游戏"),
      goal: pair("Jamie links red with stop and green with go using visual rules.", "Jamie 用视觉规则把红色和 stop/停、绿色和 go/走 连接起来。"),
      steps: [
        pair("Show red card for 'stop' and green card for 'go'.", "红卡表示 stop/停，绿卡表示 go/走。"),
        pair("Use big body movement first: marching, jumping, or pushing a cart.", "先用大动作：踏步、跳、推车。"),
        pair("Switch cards slowly and praise every stop.", "慢慢切换卡片，每次停下都表扬。"),
        pair("Finish with Jamie choosing red or green for the adult to follow.", "最后让 Jamie 选择红或绿，让成人跟随。")
      ],
      materials: [
        pair("Red and green cards", "红色和绿色卡片"),
        pair("Open floor space", "空地"),
        pair("Optional toy traffic light", "可选玩具红绿灯")
      ],
      script: pair("Red means stop. Green means go.", "红色停。绿色走。")
    }),
    stopReview: activity({
      domain: "Safety / 安全",
      icon: "stop",
      color: "#ffe9e2",
      minutes: 8,
      title: pair("STOP review in five places", "五个地点 STOP 复习"),
      goal: pair("Check whether STOP works across home, car, path, table, and play.", "检查 STOP 是否能在家、车边、小路、桌面和游戏中使用。"),
      steps: [
        pair("Pick five familiar places and give one STOP chance in each.", "选五个熟悉地点，每个地点给一次 STOP 机会。"),
        pair("Record independent, prompted, or full support.", "记录独立、提示后完成或全辅助。"),
        pair("Keep the wording identical and the consequence calm.", "语言保持一致，结果保持平静。"),
        pair("Celebrate the strongest place and note the hardest place.", "庆祝表现最好的地点，记录最困难的地点。")
      ],
      materials: [
        pair("STOP card", "STOP 图卡"),
        pair("Checklist in this app", "本网站打卡表"),
        pair("One reinforcer after all five", "五次结束后的强化物")
      ],
      script: pair("Stop. Good waiting. Go.", "停。等得好。走。")
    }),
    transitionFirstThen: activity({
      domain: "Regulation / 调节",
      icon: "firstThen",
      color: "#eef7fb",
      minutes: 6,
      title: pair("First-Then transition", "First-Then 转换"),
      goal: pair("Jamie completes one short adult-led action before a preferred action.", "Jamie 先完成一个短成人引导动作，再进入喜欢的活动。"),
      steps: [
        pair("Show two pictures: first work, then preferred item.", "出示两张图：first/先做任务，then/再做喜欢的东西。"),
        pair("Keep the first task under 60 seconds.", "first 任务控制在 60 秒内。"),
        pair("Point to the cards instead of repeating too much language.", "多指图卡，少重复语言。"),
        pair("Deliver the 'then' item immediately when first is finished.", "first 完成后立刻给 then 的活动。")
      ],
      materials: [
        pair("First-Then board", "First-Then 板"),
        pair("Two picture cards", "两张图片卡"),
        pair("Preferred item", "喜欢的物品")
      ],
      script: pair("First work, then bubbles.", "先做任务，再玩泡泡。")
    }),
    quietCorner: activity({
      domain: "Regulation / 调节",
      icon: "calm",
      color: "#eaf5ff",
      minutes: 8,
      title: pair("Quiet corner practice", "安静角练习"),
      goal: pair("Jamie uses a break/calm choice before distress gets too high.", "Jamie 在情绪升高前使用 break/休息 或 calm/安静选择。"),
      steps: [
        pair("Create a quiet spot with one cushion and two calming choices.", "布置安静角：一个垫子和两个安抚选择。"),
        pair("Model 'break' when Jamie is only mildly unsettled.", "在轻微不稳时示范 break/休息。"),
        pair("Stay nearby, reduce talking, and set a short timer.", "成人在旁边，减少说话，设短计时。"),
        pair("Return with 'ready' and one easy success task.", "用 ready/准备好了 回到一个容易成功的任务。")
      ],
      materials: [
        pair("Cushion or small mat", "垫子或小地垫"),
        pair("Break card and calm card", "休息卡和安静卡"),
        pair("Timer and sensory item", "计时器和感官物品")
      ],
      script: pair("Break. Calm body. Ready.", "休息。身体安静。准备好了。")
    }),
    bubblesMoreGo: activity({
      domain: "Communication / 沟通",
      icon: "bubbles",
      color: "#e7f7ff",
      minutes: 8,
      title: pair("Bubbles: more/go", "泡泡：more/go"),
      goal: pair("Jamie requests more or go with a word, sign, sound, card, or eye gaze.", "Jamie 用词、手势、声音、图卡或眼神请求 more/还要 或 go/开始。"),
      steps: [
        pair("Hold bubbles in sight but out of reach.", "把泡泡放在看得见但够不到的位置。"),
        pair("Blow once, close the lid, and wait three seconds.", "吹一次，盖上盖子，等待 3 秒。"),
        pair("Accept any clear attempt, then model the word and blow again.", "接受任何清晰尝试，再示范词语并继续吹。"),
        pair("Pause often; the pause creates the communication chance.", "经常暂停；暂停就是沟通机会。")
      ],
      materials: [
        pair("Bubbles", "泡泡"),
        pair("More/go cards", "more/go 图卡"),
        pair("Towel for clean-up", "清洁小毛巾")
      ],
      script: pair("More? More bubbles. Go!", "还要？还要泡泡。开始！")
    }),
    helpOpenBox: activity({
      domain: "Communication / 沟通",
      icon: "box",
      color: "#fff7df",
      minutes: 7,
      title: pair("Clear box: help/open", "透明盒：help/open"),
      goal: pair("Jamie asks for help or open instead of pulling, crying, or giving up.", "Jamie 用 help/帮忙 或 open/打开 请求，而不是拉扯、哭或放弃。"),
      steps: [
        pair("Place a preferred toy in a clear container Jamie cannot open alone.", "把喜欢的玩具放进 Jamie 不能独立打开的透明盒。"),
        pair("Wait silently for a reach, look, sound, or gesture.", "安静等待伸手、看你、发声或手势。"),
        pair("Prompt lightly: 'help?' or point to the help card.", "轻提示：help/帮忙？或指 help 图卡。"),
        pair("Open immediately after a request attempt.", "一有请求尝试就立刻打开。")
      ],
      materials: [
        pair("Clear container with lid", "带盖透明盒"),
        pair("Favourite small toy", "喜欢的小玩具"),
        pair("Help/open cards", "help/open 图卡")
      ],
      script: pair("Help. Open. Here it is.", "帮忙。打开。给你。")
    }),
    finishedAgain: activity({
      domain: "Communication / 沟通",
      icon: "again",
      color: "#eaf7ee",
      minutes: 7,
      title: pair("Finished or again", "finished/again 选择"),
      goal: pair("Jamie tells the adult whether an activity is finished or should continue.", "Jamie 表达活动是 finished/完成 还是 again/再来。"),
      steps: [
        pair("Run a favourite action for two short turns.", "做一个喜欢的动作游戏，两轮短回合。"),
        pair("Pause and show two choices: finished and again.", "暂停并出示两个选择：finished/完成 和 again/再来。"),
        pair("Honour the choice quickly, even if it ends the activity.", "快速尊重选择，即使选择结束活动。"),
        pair("Model the opposite choice later, but do not force it.", "稍后示范另一个选择，但不强迫。")
      ],
      materials: [
        pair("Finished card", "finished/完成 图卡"),
        pair("Again card", "again/再来 图卡"),
        pair("Short action game", "短动作游戏")
      ],
      script: pair("Finished or again?", "完成还是再来？")
    }),
    notAvailable: activity({
      domain: "Communication / 沟通",
      icon: "choice",
      color: "#f8edf9",
      minutes: 8,
      title: pair("Not available + alternative", "没有了 + 替代选择"),
      goal: pair("Jamie tolerates 'not available' when an adult immediately offers two real alternatives.", "成人说 not available/没有了 后立刻给两个真实替代选项，Jamie 学习接受转换。"),
      steps: [
        pair("Choose a low-stakes preferred item, not the highest-value item.", "选择低风险喜欢物，不用最强强化物。"),
        pair("Show the empty container and say 'not available'.", "出示空盒，说 not available/没有了。"),
        pair("Offer two alternatives with pictures or real objects.", "用图片或实物提供两个替代选项。"),
        pair("Reinforce choosing, waiting, or calm body.", "强化选择、等待或身体平静。")
      ],
      materials: [
        pair("Empty container", "空盒子"),
        pair("Two alternative items", "两个替代物品"),
        pair("Choice board", "选择板")
      ],
      script: pair("Not available. Choose this or this.", "没有了。选这个还是这个。")
    }),
    snackDrink: activity({
      domain: "Communication / 沟通",
      icon: "snack",
      color: "#fff1e9",
      minutes: 8,
      title: pair("Snack: eat/drink request", "点心：eat/drink 请求"),
      goal: pair("Jamie requests eat or drink during a natural snack routine.", "Jamie 在自然点心 routine 中请求 eat/吃 或 drink/喝。"),
      steps: [
        pair("Give tiny portions so there are many requesting chances.", "每次给小份量，创造多次请求机会。"),
        pair("Hold up food and water, wait, then model 'eat' or 'drink'.", "举起食物和水，等待，再示范 eat/吃 或 drink/喝。"),
        pair("Accept pointing, reaching, sound, or word approximation.", "接受指、伸手、发声或近似词。"),
        pair("Record how many spontaneous requests happen.", "记录主动请求次数。")
      ],
      materials: [
        pair("Small snack pieces", "小份点心"),
        pair("Water bottle or cup", "水瓶或杯子"),
        pair("Eat/drink cards", "eat/drink 图卡")
      ],
      script: pair("Eat? Drink? You want drink.", "吃？喝？你要喝。")
    }),
    smallSnack: activity({
      domain: "Communication / 沟通",
      icon: "snack",
      color: "#fff4dc",
      minutes: 7,
      title: pair("Small-piece snack requesting", "小份点心请求"),
      goal: pair("Increase repeated intentional requests without overloading Jamie.", "在不过载的情况下增加多次有意图请求。"),
      steps: [
        pair("Break snack into 8 to 10 tiny pieces.", "把点心分成 8 到 10 小份。"),
        pair("Give one piece, close the container, and wait.", "给一小块，盖上盒子，等待。"),
        pair("Prompt from least to most: pause, look, point, model.", "提示从少到多：暂停、看、指、示范。"),
        pair("Stop before frustration builds.", "在挫败升高前结束。")
      ],
      materials: [
        pair("Snack box", "点心盒"),
        pair("Tiny snack pieces", "小份点心"),
        pair("More/eat cards", "more/eat 图卡")
      ],
      script: pair("More eat. Here you go.", "还要吃。给你。")
    }),
    playDumbFlower: activity({
      domain: "Communication / 沟通",
      icon: "flower",
      color: "#eaf8ed",
      minutes: 8,
      title: pair("Playful confusion: find the flower", "装傻游戏：找花"),
      goal: pair("Jamie repairs communication when an adult pretends not to understand.", "成人装作不懂时，Jamie 练习修复沟通。"),
      steps: [
        pair("Put a flower picture and two distractors on the table.", "桌上放花图片和两个干扰图片。"),
        pair("Ask Jamie to help you find the flower, then deliberately reach for the wrong card.", "请 Jamie 帮你找花，然后故意拿错。"),
        pair("Pause for correction: point, sound, push away, or word.", "等待他纠正：指、发声、推开或说词。"),
        pair("Celebrate the repair and say the correct word clearly.", "庆祝修复沟通，并清晰说出正确词。")
      ],
      materials: [
        pair("Flower picture", "花图片"),
        pair("Two distractor pictures", "两个干扰图片"),
        pair("Small sticker or stamp", "小贴纸或印章")
      ],
      script: pair("This one? Oh, flower! You told me.", "这个？哦，花！你告诉我了。")
    }),
    missingPuzzle: activity({
      domain: "Communication / 沟通",
      icon: "puzzle",
      color: "#f3efff",
      minutes: 8,
      title: pair("Missing puzzle piece", "缺一块拼图"),
      goal: pair("Jamie notices a missing item and asks for help, more, or the item name.", "Jamie 发现缺少物品，并请求 help/帮忙、more/还要 或说物名。"),
      steps: [
        pair("Give a familiar inset puzzle with one piece missing.", "给熟悉的嵌板拼图，但藏起一块。"),
        pair("Wait when Jamie reaches the empty space.", "Jamie 伸向空位时等待。"),
        pair("Model 'help' or the object word, then hand over the piece.", "示范 help/帮忙 或物名，然后给出拼图块。"),
        pair("Repeat with a different missing piece if regulated.", "状态稳定时换另一块重复。")
      ],
      materials: [
        pair("Inset puzzle", "嵌板拼图"),
        pair("Missing piece hidden nearby", "藏在附近的一块拼图"),
        pair("Help card", "help 图卡")
      ],
      script: pair("Missing. Help? Here is the car.", "少了。帮忙？车在这里。")
    }),
    marbleRun: activity({
      domain: "Communication / 沟通",
      icon: "ramp",
      color: "#eaf7ff",
      minutes: 8,
      title: pair("Blocked ramp: go/more", "挡住轨道：go/more"),
      goal: pair("Jamie uses a request to make an adult unblock a preferred action.", "Jamie 用请求让成人解除阻挡，继续喜欢的动作。"),
      steps: [
        pair("Set up a car ramp or marble run.", "搭建小车坡道或弹珠轨道。"),
        pair("Block the start gently with your hand and wait.", "用手轻轻挡住起点并等待。"),
        pair("Accept go, more, look, push, or card exchange as a request.", "接受 go、more、看你、推手或递卡作为请求。"),
        pair("Release the car immediately and narrate the success.", "立刻放车，并描述成功。")
      ],
      materials: [
        pair("Car ramp or marble run", "小车坡道或弹珠轨道"),
        pair("Toy car or ball", "小车或球"),
        pair("Go/more cards", "go/more 图卡")
      ],
      script: pair("Go car! More ramp.", "车走！还要轨道。")
    }),
    helpFindBook: activity({
      domain: "Communication / 沟通",
      icon: "book",
      color: "#edf8f4",
      minutes: 8,
      title: pair("Help find a book", "帮忙找书"),
      goal: pair("Jamie asks for help locating a preferred book and practices shared attention.", "Jamie 请求帮忙找喜欢的书，并练习共同注意。"),
      steps: [
        pair("Hide a favourite book in an obvious but slightly tricky place.", "把喜欢的书藏在明显但稍难的位置。"),
        pair("Look confused and wait for Jamie to guide you.", "成人表现困惑，等待 Jamie 引导。"),
        pair("Model 'help find book' after any attempt.", "任何尝试后示范 help find book/帮忙找书。"),
        pair("Read one page as the immediate reward.", "找到后马上读一页作为奖励。")
      ],
      materials: [
        pair("Favourite book", "喜欢的书"),
        pair("Book card", "书图卡"),
        pair("Small shelf or bag", "小书架或书包")
      ],
      script: pair("Help find book. We found it!", "帮忙找书。找到了！")
    }),
    choosePhoto: activity({
      domain: "Communication / 沟通",
      icon: "photo",
      color: "#fff7de",
      minutes: 8,
      title: pair("Choose a Daily Talk photo", "选择 Daily Talk 照片"),
      goal: pair("Jamie chooses one photo to share with family or school.", "Jamie 选择一张照片，用于和家人或学校分享。"),
      steps: [
        pair("Show two recent photos side by side.", "并排出示两张近期照片。"),
        pair("Ask 'which one?' and wait without adding more words.", "问 which one?/哪一张？然后安静等待。"),
        pair("Accept pointing, touching, looking, or vocalising.", "接受指、摸、看或发声。"),
        pair("Model one simple sentence about the chosen photo.", "用所选照片示范一句简单句。")
      ],
      materials: [
        pair("Two printed or phone photos", "两张打印照片或手机照片"),
        pair("Daily Talk notebook", "Daily Talk 沟通本"),
        pair("I like card", "I like/我喜欢 图卡")
      ],
      script: pair("You choose this photo. I like flowers.", "你选这张照片。我喜欢花。")
    }),
    wantNumbers: activity({
      domain: "Communication / 沟通",
      icon: "numbers",
      color: "#edf4ff",
      minutes: 8,
      title: pair("I want numbers", "I want numbers/我要数字"),
      goal: pair("Jamie requests a number item using 'I want', pointing, or card exchange.", "Jamie 用 I want/我要、指认或递卡请求数字物品。"),
      steps: [
        pair("Put number cards or blocks in a clear bag.", "把数字卡或数字积木放进透明袋。"),
        pair("Offer one at a time after a request attempt.", "每次请求尝试后给一个。"),
        pair("Model 'I want number' or 'want three'.", "示范 I want number/我要数字 或 want three/要3。"),
        pair("Let Jamie line up or sort numbers after each request.", "每次请求后允许 Jamie 排列或分类数字。")
      ],
      materials: [
        pair("Number cards 0-6", "0-6 数字卡"),
        pair("Clear bag", "透明袋"),
        pair("I want card", "I want/我要 图卡")
      ],
      script: pair("I want three. Here is three.", "我要3。3在这里。")
    }),
    carRamp: activity({
      domain: "Communication / 沟通",
      icon: "car",
      color: "#e9f6ff",
      minutes: 8,
      title: pair("Car ramp: more/go", "小车坡道：more/go"),
      goal: pair("Jamie initiates to start another car turn.", "Jamie 主动发起下一轮小车游戏。"),
      steps: [
        pair("Send the car down once, then hold it at the top.", "先让小车滑下一次，然后把车停在坡顶。"),
        pair("Look expectant and wait three seconds.", "期待地看着 Jamie，等待 3 秒。"),
        pair("Accept a sound, look, gesture, sign, card, or word.", "接受声音、眼神、手势、图卡或词语。"),
        pair("Say the target word and release the car.", "说目标词并放车。")
      ],
      materials: [
        pair("Toy cars", "玩具车"),
        pair("Ramp or cardboard slope", "坡道或纸板斜坡"),
        pair("Go/more cards", "go/more 图卡")
      ],
      script: pair("Go car. More car.", "车走。还要车。")
    }),
    helpOpenPlaydough: activity({
      domain: "Communication / 沟通",
      icon: "playdough",
      color: "#fff0e7",
      minutes: 8,
      title: pair("Playdough: help/open", "橡皮泥：help/open"),
      goal: pair("Jamie requests help opening a container before play.", "Jamie 在玩之前请求 help/帮忙 或 open/打开。"),
      steps: [
        pair("Offer a closed playdough tub that is difficult to open.", "给一个较难打开的橡皮泥盒。"),
        pair("Wait for a reach or look before prompting.", "先等待伸手或看你，再提示。"),
        pair("Open after the request attempt and give a small piece.", "请求尝试后打开，并给一小块。"),
        pair("Repeat with tools inside a second container.", "把工具放进第二个盒子重复。")
      ],
      materials: [
        pair("Playdough tubs", "橡皮泥盒"),
        pair("Rolling pin or cutter", "擀棒或切模"),
        pair("Help/open cards", "help/open 图卡")
      ],
      script: pair("Open playdough. Help please.", "打开橡皮泥。请帮忙。")
    }),
    finishedBreak: activity({
      domain: "Communication / 沟通",
      icon: "calm",
      color: "#eef7f0",
      minutes: 7,
      title: pair("Finished or break", "finished/break"),
      goal: pair("Jamie uses finished or break instead of leaving unexpectedly.", "Jamie 用 finished/完成 或 break/休息 代替突然离开。"),
      steps: [
        pair("Start a short table task with a visible end point.", "开始一个有明显结束点的短桌面任务。"),
        pair("Offer finished and break cards after 2 minutes or signs of fatigue.", "2 分钟后或出现疲劳时提供 finished/break 图卡。"),
        pair("If Jamie chooses break, set a short timer and return once.", "若选择休息，设短计时器，并返回一次。"),
        pair("If Jamie chooses finished, put the task into the finished box.", "若选择完成，把任务放进完成盒。")
      ],
      materials: [
        pair("Finished card", "完成图卡"),
        pair("Break card", "休息图卡"),
        pair("Finished box", "完成盒")
      ],
      script: pair("Finished? Break? You can tell me.", "完成？休息？你可以告诉我。")
    }),
    drinkToiletCue: activity({
      domain: "Communication / 沟通",
      icon: "toilet",
      color: "#eaf9ff",
      minutes: 6,
      title: pair("Drink/toilet cue routine", "drink/toilet 提示 routine"),
      goal: pair("Jamie responds to drink and toilet visuals during the school-bag routine.", "Jamie 在书包 routine 中回应 drink/喝水 和 toilet/厕所 图示。"),
      steps: [
        pair("Show drink card before offering water.", "给水前先出示 drink/喝水 图卡。"),
        pair("Show toilet card before walking to the bathroom.", "走向厕所前先出示 toilet/厕所 图卡。"),
        pair("Keep the routine predictable and low-pressure.", "routine 保持可预测、低压力。"),
        pair("Record acceptance, refusal, or independent initiation.", "记录接受、拒绝或主动发起。")
      ],
      materials: [
        pair("Drink card", "喝水图卡"),
        pair("Toilet card", "厕所图卡"),
        pair("Water bottle", "水瓶")
      ],
      script: pair("Drink. Toilet. Then play.", "喝水。厕所。然后玩。")
    }),
    shopWords: activity({
      domain: "Communication / 沟通",
      icon: "money",
      color: "#fff8df",
      minutes: 10,
      title: pair("Shop words: I want/pay/finished", "购物词：我要/付钱/完成"),
      goal: pair("Jamie practices simple functional words in a real or pretend shop routine.", "Jamie 在真实或假装购物 routine 中练习功能词。"),
      steps: [
        pair("Set up two items and a simple checkout spot.", "摆两个商品和一个简单收银点。"),
        pair("Prompt 'I want' before giving the item.", "给物品前提示 I want/我要。"),
        pair("Prompt 'pay' by handing over a card or coin.", "通过递卡或硬币提示 pay/付钱。"),
        pair("End with 'finished' and put items in a bag.", "最后说 finished/完成，并把物品放袋子。")
      ],
      materials: [
        pair("Two snack or toy items", "两个点心或玩具商品"),
        pair("Pretend card or coin", "假卡或硬币"),
        pair("Small shopping bag", "小购物袋")
      ],
      script: pair("I want. Pay. Finished.", "我要。付钱。完成。")
    }),
    calmMusic: activity({
      domain: "Regulation / 调节",
      icon: "music",
      color: "#edf1ff",
      minutes: 8,
      title: pair("Break/calm/music choice", "break/calm/music 选择"),
      goal: pair("Jamie chooses a calming option and returns to one easy task.", "Jamie 选择一个安抚方式，并回到一个容易任务。"),
      steps: [
        pair("Offer three visuals: break, calm, music.", "提供三个图示：break/休息、calm/安静、music/音乐。"),
        pair("Let Jamie choose by touch, point, gaze, or reach.", "允许用触摸、指、眼神或伸手选择。"),
        pair("Use the chosen option for two minutes.", "使用所选方式 2 分钟。"),
        pair("Return with one known successful action.", "回到一个已知能成功的动作。")
      ],
      materials: [
        pair("Break/calm/music cards", "休息/安静/音乐图卡"),
        pair("Timer", "计时器"),
        pair("Soft music or sensory item", "轻音乐或感官物")
      ],
      script: pair("Choose calm. Two minutes. Ready.", "选择安静。两分钟。准备好了。")
    }),
    inOutOnOff: activity({
      domain: "Communication / 沟通",
      icon: "box",
      color: "#eaf8f6",
      minutes: 8,
      title: pair("In/out/on/off play", "in/out/on/off 游戏"),
      goal: pair("Jamie hears and uses early location/action words during play.", "Jamie 在游戏中听懂并尝试使用早期方位/动作词。"),
      steps: [
        pair("Use a box, lid, and three favourite objects.", "准备盒子、盖子和三个喜欢物。"),
        pair("Model one word while moving the object: in, out, on, off.", "移动物品时示范单词：in/out/on/off 进/出/上/下。"),
        pair("Pause and let Jamie direct the next move.", "暂停，让 Jamie 指挥下一步。"),
        pair("Keep language short and paired with action.", "语言短，并始终配合动作。")
      ],
      materials: [
        pair("Box with lid", "带盖盒子"),
        pair("Three small toys", "三个小玩具"),
        pair("In/out/on/off cards", "in/out/on/off 图卡")
      ],
      script: pair("In. Out. On. Off.", "进去。出来。放上。拿下。")
    }),
    observeCoreWords: activity({
      domain: "Communication / 沟通",
      icon: "check",
      color: "#eef7ef",
      minutes: 10,
      title: pair("Core-word observation", "核心词观察"),
      goal: pair("Parents observe which core words Jamie uses most naturally today.", "家长观察 Jamie 今天最自然使用哪些核心词。"),
      steps: [
        pair("During free play, listen for or prompt only 5 core words.", "自由游戏中只观察或轻提示 5 个核心词。"),
        pair("Use wait time before modelling.", "示范前先等待。"),
        pair("Write down spontaneous attempts and prompted attempts separately.", "分别记录主动尝试和提示后尝试。"),
        pair("Choose one word to carry into tomorrow.", "选一个词带入明天。")
      ],
      materials: [
        pair("Core word list: stop, go, more, help, finished", "核心词列表：停、走、还要、帮忙、完成"),
        pair("This app's metric fields", "本网站每日记录区"),
        pair("Favourite free-play toys", "喜欢的自由游戏玩具")
      ],
      script: pair("I heard 'more'. More blocks.", "我听到还要。还要积木。")
    }),
    reviewTalk: activity({
      domain: "Communication / 沟通",
      icon: "photo",
      color: "#fff8e8",
      minutes: 8,
      title: pair("Daily Talk rehearsal", "Daily Talk 预演"),
      goal: pair("Jamie shares one photo or object with a simple modelled sentence.", "Jamie 用一张照片或一个物品分享一句简单示范句。"),
      steps: [
        pair("Choose one photo or object from today.", "选择今天的一张照片或一个物品。"),
        pair("Model one short sentence and pause for any response.", "示范一句短句，然后等待任何回应。"),
        pair("Repeat once, then stop while the interaction is still positive.", "重复一次，在互动还积极时结束。"),
        pair("Put the photo/object note into the school communication bag if needed.", "需要时把照片/物品说明放进学校沟通袋。")
      ],
      materials: [
        pair("Photo or object", "照片或物品"),
        pair("Daily Talk notebook", "Daily Talk 沟通本"),
        pair("I like/I see cards", "I like/I see 图卡")
      ],
      script: pair("I see flowers. I like flowers.", "我看到花。我喜欢花。")
    }),
    number03: activity({
      domain: "Prep learning / Prep 学习",
      icon: "numbers",
      color: "#eef5ff",
      minutes: 8,
      title: pair("Numbers 0-3 with blocks", "0-3 数字配积木"),
      goal: pair("Jamie matches numbers 0-3 to small block quantities.", "Jamie 把 0-3 数字与积木数量配对。"),
      steps: [
        pair("Show one number card at a time.", "一次只出示一张数字卡。"),
        pair("Count blocks slowly and place them under the card.", "慢慢数积木，并放在数字卡下。"),
        pair("Let Jamie place or remove blocks with help if needed.", "让 Jamie 放或拿走积木，需要时辅助。"),
        pair("Finish after three successful matches.", "成功配对三次后结束。")
      ],
      materials: [
        pair("Number cards 0, 1, 2, 3", "0、1、2、3 数字卡"),
        pair("Small blocks", "小积木"),
        pair("Tray or mat", "托盘或垫子")
      ],
      script: pair("This is two. One, two blocks.", "这是2。1、2块积木。")
    }),
    satMatch: activity({
      domain: "Prep learning / Prep 学习",
      icon: "cards",
      color: "#f0f7ff",
      minutes: 8,
      title: pair("S/A/T object matching", "S/A/T 物品配对"),
      goal: pair("Jamie matches three letter-sound objects with adult modelling.", "Jamie 在成人示范下配对三个字母音物品。"),
      steps: [
        pair("Use one object for each sound: sock, apple, toy.", "每个音用一个物品：sock、apple、toy。"),
        pair("Say the sound clearly, not a long word drill.", "清晰发音，不做长时间口头训练。"),
        pair("Ask Jamie to put the object on the matching card.", "请 Jamie 把物品放到对应卡片上。"),
        pair("Keep it playful and stop after 6 to 9 trials.", "保持游戏感，6 到 9 次后结束。")
      ],
      materials: [
        pair("S, A, T cards", "S、A、T 字母卡"),
        pair("Sock, apple picture, toy", "袜子、苹果图、小玩具"),
        pair("Small tray", "小托盘")
      ],
      script: pair("Sss sock. Put sock on S.", "Sss sock。袜子放 S。")
    }),
    abPattern: activity({
      domain: "Prep learning / Prep 学习",
      icon: "pattern",
      color: "#f3fff0",
      minutes: 8,
      title: pair("AB pattern: flower-leaf", "AB 模式：花-叶"),
      goal: pair("Jamie copies or continues a simple AB visual pattern.", "Jamie 复制或延续简单 AB 视觉模式。"),
      steps: [
        pair("Place flower, leaf, flower, leaf in a row.", "排出花、叶、花、叶。"),
        pair("Say the pattern rhythmically while pointing.", "边指边有节奏地说模式。"),
        pair("Offer two choices for the next item.", "给两个选择，让 Jamie 选下一项。"),
        pair("If too hard, switch to matching identical items first.", "如果太难，先退回相同物品配对。")
      ],
      materials: [
        pair("Flower pictures", "花图片"),
        pair("Leaf pictures", "叶子图片"),
        pair("Work mat", "任务垫")
      ],
      script: pair("Flower, leaf, flower, leaf. What next?", "花、叶、花、叶。下一个是什么？")
    }),
    dotCards: activity({
      domain: "Prep learning / Prep 学习",
      icon: "dots",
      color: "#fff6e6",
      minutes: 8,
      title: pair("Dot cards 1-5", "1-5 点卡"),
      goal: pair("Jamie subitises or counts small groups from 1 to 5.", "Jamie 识别或点数 1 到 5 的小数量。"),
      steps: [
        pair("Show a dot card for two seconds, then place it down.", "点卡出示 2 秒后放下。"),
        pair("Let Jamie match it to a number card or count dots.", "让 Jamie 配数字卡或点数。"),
        pair("Use blocks if he needs concrete support.", "需要时用积木提供具体支持。"),
        pair("Stop after 5 minutes if attention fades.", "注意力下降时 5 分钟即结束。")
      ],
      materials: [
        pair("Dot cards 1-5", "1-5 点卡"),
        pair("Number cards 1-5", "1-5 数字卡"),
        pair("Blocks", "积木")
      ],
      script: pair("I see three dots. Three.", "我看到三个点。3。")
    }),
    bookSequence: activity({
      domain: "Prep learning / Prep 学习",
      icon: "book",
      color: "#edf8f9",
      minutes: 10,
      title: pair("Book: first-next-last", "绘本：first-next-last"),
      goal: pair("Jamie experiences story order using three simple pictures.", "Jamie 用三张简单图片体验故事顺序。"),
      steps: [
        pair("Read a familiar short book or look at three pages.", "读一本熟悉短书或看三页。"),
        pair("Take or draw three quick pictures: first, next, last.", "准备三张图：first/开始，next/然后，last/最后。"),
        pair("Help Jamie place them in order.", "帮助 Jamie 按顺序摆放。"),
        pair("Retell with one word per picture if needed.", "需要时每张图只用一个词复述。")
      ],
      materials: [
        pair("Short book", "短绘本"),
        pair("Three sequence cards", "三张顺序卡"),
        pair("First/next/last strip", "first/next/last 条")
      ],
      script: pair("First car. Next wash. Last finished.", "先是车。然后洗。最后完成。")
    }),
    longShort: activity({
      domain: "Prep learning / Prep 学习",
      icon: "sort",
      color: "#f5f0ff",
      minutes: 8,
      title: pair("Long/short sorting", "长/短 分类"),
      goal: pair("Jamie sorts objects by length using visual comparison.", "Jamie 通过视觉比较按长短分类。"),
      steps: [
        pair("Place one long and one short object side by side.", "并排放一个长物品和一个短物品。"),
        pair("Use hand gesture to show long and short.", "用手势示范长和短。"),
        pair("Let Jamie sort 6 objects into two piles.", "让 Jamie 把 6 个物品分成两堆。"),
        pair("Use real objects before picture cards.", "先用实物，再用图片卡。")
      ],
      materials: [
        pair("Long and short sticks or straws", "长短木棍或吸管"),
        pair("Two trays", "两个托盘"),
        pair("Long/short cards", "长/短 图卡")
      ],
      script: pair("Long. Short. This is long.", "长。短。这个长。")
    }),
    photoTalk: activity({
      domain: "Prep learning / Prep 学习",
      icon: "photo",
      color: "#fff8e5",
      minutes: 8,
      title: pair("Family photo talk", "家庭照片表达"),
      goal: pair("Jamie attends to a photo and hears simple who/what language.", "Jamie 关注照片，并听成人示范 who/what 简单语言。"),
      steps: [
        pair("Show one family photo at a time.", "一次只出示一张家庭照片。"),
        pair("Point to a person and say the name plus one action.", "指一个人，说名字加一个动作。"),
        pair("Wait for pointing, looking, sound, or smile.", "等待指、看、发声或微笑。"),
        pair("End by letting Jamie choose the photo to keep.", "最后让 Jamie 选择保留哪张照片。")
      ],
      materials: [
        pair("Two family photos", "两张家庭照片"),
        pair("Who/what visual prompt", "who/what 提示图"),
        pair("Daily Talk notebook", "Daily Talk 沟通本")
      ],
      script: pair("Mum is eating. Jamie is smiling.", "妈妈在吃。Jamie 在笑。")
    }),
    piMatch: activity({
      domain: "Prep learning / Prep 学习",
      icon: "mouth",
      color: "#eef7ff",
      minutes: 6,
      title: pair("P/I mouth-sound play", "P/I 口型声音游戏"),
      goal: pair("Jamie watches mouth movement and matches simple sound-play objects.", "Jamie 观察口型，并配对简单声音游戏物品。"),
      steps: [
        pair("Use playful sounds only, not forced speech practice.", "只做游戏化声音，不强迫说话。"),
        pair("Pop bubbles for /p/ and show ice picture for /i/.", "泡泡 pop 对应 /p/，ice 图片对应 /i/。"),
        pair("Let Jamie choose which sound game happens next.", "让 Jamie 选择下一个声音游戏。"),
        pair("Praise looking, imitation, or any vocal attempt.", "表扬看口型、模仿或任何发声尝试。")
      ],
      materials: [
        pair("Bubbles", "泡泡"),
        pair("Ice picture or cold pack", "ice 图片或冷敷袋"),
        pair("Mirror", "镜子")
      ],
      script: pair("Pop, pop. Iiii ice.", "pop, pop。Iiii ice。")
    }),
    numberShop13: activity({
      domain: "Prep learning / Prep 学习",
      icon: "money",
      color: "#fff6df",
      minutes: 10,
      title: pair("Number shop 1-3", "数字商店 1-3"),
      goal: pair("Jamie gives or buys 1 to 3 items in a pretend shop.", "Jamie 在假装商店中给出或购买 1 到 3 个物品。"),
      steps: [
        pair("Set prices as 1, 2, or 3 blocks.", "用 1、2、3 块积木作为价格。"),
        pair("Jamie chooses an item and counts blocks to pay.", "Jamie 选择物品并数积木付款。"),
        pair("Use hand-over-hand only if needed, then fade support.", "需要时手把手辅助，然后逐渐撤除。"),
        pair("End with 'finished shop'.", "以 finished shop/商店完成 结束。")
      ],
      materials: [
        pair("Three items", "三个商品"),
        pair("Blocks as money", "积木当钱"),
        pair("Number cards 1-3", "1-3 数字卡")
      ],
      script: pair("Two blocks. Pay two.", "两块。付两个。")
    }),
    natureObserve: activity({
      domain: "Prep learning / Prep 学习",
      icon: "flower",
      color: "#edf9ed",
      minutes: 10,
      title: pair("Nature observation", "自然观察"),
      goal: pair("Jamie notices and labels one feature: colour, size, or count.", "Jamie 注意并标记一个特征：颜色、大小或数量。"),
      steps: [
        pair("Collect or photograph three safe natural items.", "收集或拍三种安全自然物。"),
        pair("Model one feature at a time: green, big, two.", "一次示范一个特征：green/绿色、big/大、two/两个。"),
        pair("Let Jamie match, point, or place items on cards.", "让 Jamie 配对、指认或把物品放到卡上。"),
        pair("Keep hands clean and supervise closely.", "保持手部清洁，全程看护。")
      ],
      materials: [
        pair("Leaves, flowers, or photos", "叶子、花或照片"),
        pair("Colour/size/count cards", "颜色/大小/数量卡"),
        pair("Tray", "托盘")
      ],
      script: pair("Green leaf. Big leaf. Two leaves.", "绿色叶子。大叶子。两片叶子。")
    }),
    shapeSort: activity({
      domain: "Prep learning / Prep 学习",
      icon: "shape",
      color: "#f0f4ff",
      minutes: 8,
      title: pair("Shape sort", "形状分类"),
      goal: pair("Jamie sorts circles, squares, and triangles by shape.", "Jamie 按形状分类圆形、正方形和三角形。"),
      steps: [
        pair("Start with two shapes only, then add the third if easy.", "先用两个形状，容易后再加第三个。"),
        pair("Match real objects to picture outlines.", "把实物配到图片轮廓上。"),
        pair("Use short labels and gestures.", "用短标签和手势。"),
        pair("Celebrate sorting, not perfect naming.", "强化分类，不要求完美命名。")
      ],
      materials: [
        pair("Shape blocks", "形状积木"),
        pair("Shape mats", "形状底板"),
        pair("Two trays", "两个托盘")
      ],
      script: pair("Circle here. Square here.", "圆形这里。正方形这里。")
    }),
    trackStory: activity({
      domain: "Prep learning / Prep 学习",
      icon: "ramp",
      color: "#eaf6ff",
      minutes: 10,
      title: pair("Track story: first-next-last", "轨道故事：先-然后-最后"),
      goal: pair("Jamie connects play actions into a simple sequence.", "Jamie 把游戏动作连接成简单顺序。"),
      steps: [
        pair("Make a three-part car track: start, bridge, finish.", "做三段小车轨道：起点、桥、终点。"),
        pair("Take one photo or draw one symbol for each part.", "每一段拍照或画一个符号。"),
        pair("Run the car and place the sequence cards.", "跑小车并摆顺序卡。"),
        pair("Use the same three words every time.", "每次用同样三个词。")
      ],
      materials: [
        pair("Toy track or cardboard path", "玩具轨道或纸板路"),
        pair("Toy car", "玩具车"),
        pair("First/next/last cards", "先/然后/最后 卡")
      ],
      script: pair("First start. Next bridge. Last finish.", "先起点。然后桥。最后完成。")
    }),
    number06: activity({
      domain: "Prep learning / Prep 学习",
      icon: "numbers",
      color: "#eef6ff",
      minutes: 10,
      title: pair("Numbers 0-6 chalk", "粉笔数字 0-6"),
      goal: pair("Jamie recognises and moves to numbers 0-6 on the ground.", "Jamie 识别并移动到地上的 0-6 数字。"),
      steps: [
        pair("Write 0-6 large on the ground or paper.", "在地上或大纸上写 0-6。"),
        pair("Call one number and help Jamie jump, step, or put a car on it.", "说一个数字，帮助 Jamie 跳到、踩到或放车到上面。"),
        pair("Let Jamie choose a number for the adult.", "让 Jamie 给成人选择一个数字。"),
        pair("End before fatigue; movement should stay fun.", "疲劳前结束，让运动保持有趣。")
      ],
      materials: [
        pair("Chalk or large paper", "粉笔或大纸"),
        pair("Toy car or beanbag", "玩具车或豆袋"),
        pair("Number cards 0-6", "0-6 数字卡")
      ],
      script: pair("Find six. Jump to six.", "找到6。跳到6。")
    }),
    mnMatch: activity({
      domain: "Prep learning / Prep 学习",
      icon: "mouth",
      color: "#f5f0ff",
      minutes: 6,
      title: pair("M/N mouth-sound play", "M/N 口型声音游戏"),
      goal: pair("Jamie watches nasal mouth movements and pairs them with playful actions.", "Jamie 观察 m/n 口型，并和游戏动作配对。"),
      steps: [
        pair("Use mirror play for /m/ with music and /n/ with nose.", "用镜子玩 /m/ music 和 /n/ nose。"),
        pair("Tap lips gently for /m/ and point to nose for /n/.", "m 时轻拍嘴唇，n 时指鼻子。"),
        pair("Let Jamie choose music or nose card.", "让 Jamie 选择 music 或 nose 卡。"),
        pair("Accept attention and attempts; do not demand repetition.", "接受关注和尝试，不要求重复。")
      ],
      materials: [
        pair("Mirror", "镜子"),
        pair("Music card", "music 图卡"),
        pair("Nose picture", "nose 图片")
      ],
      script: pair("Mmm music. Nnn nose.", "Mmm music。Nnn nose。")
    }),
    patternABC: activity({
      domain: "Prep learning / Prep 学习",
      icon: "pattern",
      color: "#f0fff0",
      minutes: 10,
      title: pair("AB/ABC pattern build", "AB/ABC 模式搭建"),
      goal: pair("Jamie copies AB and tries one ABC pattern with visual support.", "Jamie 复制 AB，并在视觉支持下尝试一个 ABC 模式。"),
      steps: [
        pair("Warm up with AB using two colours.", "先用两种颜色做 AB 热身。"),
        pair("If successful, add a third item for ABC.", "成功后加入第三项做 ABC。"),
        pair("Use a finished strip so the pattern has a clear end.", "使用完成条，让模式有明确终点。"),
        pair("Return to AB if ABC causes frustration.", "ABC 引起挫败时退回 AB。")
      ],
      materials: [
        pair("Three colours of blocks or stickers", "三种颜色积木或贴纸"),
        pair("Pattern strip", "模式条"),
        pair("Finished box", "完成盒")
      ],
      script: pair("Red, blue, red, blue. Now try red, blue, green.", "红、蓝、红、蓝。现在试红、蓝、绿。")
    }),
    retell3: activity({
      domain: "Prep learning / Prep 学习",
      icon: "book",
      color: "#fff9e8",
      minutes: 10,
      title: pair("Retell with three pictures", "三图复述"),
      goal: pair("Jamie places three pictures in order and hears a short retell.", "Jamie 排列三张图，并听一句短复述。"),
      steps: [
        pair("Use three pictures from a familiar routine.", "使用熟悉 routine 的三张图。"),
        pair("Ask Jamie to place them left to right.", "请 Jamie 从左到右摆放。"),
        pair("If needed, give only two choices at a time.", "需要时一次只给两个选择。"),
        pair("Adult retells with one sentence per picture.", "成人每张图说一句。")
      ],
      materials: [
        pair("Three routine photos", "三张 routine 照片"),
        pair("Sequence strip", "顺序条"),
        pair("Velcro or tape", "魔术贴或胶带")
      ],
      script: pair("First shoes. Next car. Last school.", "先穿鞋。然后上车。最后学校。")
    }),
    todayYesterday: activity({
      domain: "Prep learning / Prep 学习",
      icon: "calendar",
      color: "#f2f7ff",
      minutes: 8,
      title: pair("Today/yesterday photo talk", "今天/昨天 照片谈话"),
      goal: pair("Jamie hears simple time language linked to real photos.", "Jamie 通过真实照片接触简单时间词。"),
      steps: [
        pair("Show one photo from today and one from yesterday.", "出示今天和昨天各一张照片。"),
        pair("Place them under today and yesterday labels.", "放到 today/今天 和 yesterday/昨天 标签下。"),
        pair("Model one short sentence for each.", "每张图示范一句短句。"),
        pair("Let Jamie choose which photo to share.", "让 Jamie 选择分享哪张照片。")
      ],
      materials: [
        pair("Two photos", "两张照片"),
        pair("Today/yesterday labels", "今天/昨天 标签"),
        pair("Daily Talk notebook", "Daily Talk 沟通本")
      ],
      script: pair("Today park. Yesterday book.", "今天公园。昨天看书。")
    }),
    numberShop15: activity({
      domain: "Prep learning / Prep 学习",
      icon: "money",
      color: "#fff3da",
      minutes: 10,
      title: pair("Number shop 1-5", "数字商店 1-5"),
      goal: pair("Jamie counts or matches 1 to 5 items in a pretend shop.", "Jamie 在假装商店中点数或配对 1 到 5。"),
      steps: [
        pair("Set up five items with number price cards.", "摆五个商品和数字价格卡。"),
        pair("Jamie chooses one item and pays with matching blocks.", "Jamie 选商品，并用对应数量积木付款。"),
        pair("Use number card matching if counting is too hard.", "如果点数太难，就做数字卡配对。"),
        pair("Put the item in a bag and say finished.", "把商品放袋子，说 finished/完成。")
      ],
      materials: [
        pair("Five items", "五个商品"),
        pair("Blocks as money", "积木当钱"),
        pair("Number cards 1-5", "1-5 数字卡")
      ],
      script: pair("Pay five. One, two, three, four, five.", "付5个。1、2、3、4、5。")
    }),
    movementPattern: activity({
      domain: "Prep learning / Prep 学习",
      icon: "traffic",
      color: "#fff5dd",
      minutes: 8,
      title: pair("Movement pattern", "动作模式"),
      goal: pair("Jamie follows a visual movement pattern such as jump-clap-jump-clap.", "Jamie 跟随视觉动作模式，如跳-拍手-跳-拍手。"),
      steps: [
        pair("Choose two actions and draw simple icons.", "选择两个动作并画简单图标。"),
        pair("Do the pattern with Jamie side by side.", "和 Jamie 并排做模式。"),
        pair("Pause before the next action for Jamie to predict.", "下一动作前暂停，让 Jamie 预测。"),
        pair("Use green/go and red/stop cards to regulate energy.", "用绿色 go 和红色 stop 调节能量。")
      ],
      materials: [
        pair("Action cards", "动作卡"),
        pair("Red/green cards", "红/绿 卡"),
        pair("Open movement space", "开放活动空间")
      ],
      script: pair("Jump, clap, jump, clap. What next?", "跳、拍手、跳、拍手。下一个？")
    }),
    heavyLight: activity({
      domain: "Prep learning / Prep 学习",
      icon: "bag",
      color: "#edf7f5",
      minutes: 8,
      title: pair("Heavy/light comparison", "重/轻 比较"),
      goal: pair("Jamie compares two objects by weight with hands-on exploration.", "Jamie 通过手部探索比较两个物品的重和轻。"),
      steps: [
        pair("Offer one heavy bag and one light bag.", "提供一个重袋子和一个轻袋子。"),
        pair("Let Jamie lift each with support.", "让 Jamie 在辅助下分别提起。"),
        pair("Sort objects into heavy and light trays.", "把物品分到重和轻两个托盘。"),
        pair("Pair language with body sensation.", "把语言和身体感觉配对。")
      ],
      materials: [
        pair("Two bags", "两个袋子"),
        pair("Objects with different weights", "不同重量物品"),
        pair("Heavy/light cards", "重/轻 图卡")
      ],
      script: pair("Heavy. Light. This bag is heavy.", "重。轻。这个袋子重。")
    }),
    emotions: activity({
      domain: "Prep learning / Prep 学习",
      icon: "face",
      color: "#fff0ef",
      minutes: 8,
      title: pair("Happy/sad emotion match", "开心/难过 情绪配对"),
      goal: pair("Jamie matches happy and sad faces to simple situations.", "Jamie 把开心和难过表情配到简单情境。"),
      steps: [
        pair("Start with two clear face pictures: happy and sad.", "先用两张清晰表情图：开心和难过。"),
        pair("Match each to a real or toy situation.", "把表情配到真实或玩具情境。"),
        pair("Use your own face and mirror for imitation.", "用成人表情和镜子做模仿。"),
        pair("Keep it descriptive, not demanding feelings on cue.", "做描述，不要求按指令表达情绪。")
      ],
      materials: [
        pair("Happy/sad face cards", "开心/难过 表情卡"),
        pair("Mirror", "镜子"),
        pair("Two toy situations", "两个玩具情境")
      ],
      script: pair("Happy face. Sad face. Teddy is sad.", "开心脸。难过脸。小熊难过。")
    }),
    cameraPhoto: activity({
      domain: "Prep learning / Prep 学习",
      icon: "photo",
      color: "#edf5ff",
      minutes: 8,
      title: pair("Camera/photo choosing", "相机/照片选择"),
      goal: pair("Jamie takes or chooses one photo to communicate an interest.", "Jamie 拍或选择一张照片表达兴趣。"),
      steps: [
        pair("Offer two objects and ask Jamie which one to photograph.", "提供两个物品，问 Jamie 想拍哪一个。"),
        pair("Let him press the camera button with support if needed.", "需要时辅助他按拍照键。"),
        pair("Look at the photo together and label it.", "一起看照片并命名。"),
        pair("Use the photo in Daily Talk later.", "稍后把照片用于 Daily Talk。")
      ],
      materials: [
        pair("Phone or camera", "手机或相机"),
        pair("Two objects", "两个物品"),
        pair("Daily Talk notebook", "Daily Talk 沟通本")
      ],
      script: pair("Take photo. I see car.", "拍照。我看到车。")
    }),
    number010: activity({
      domain: "Prep learning / Prep 学习",
      icon: "numbers",
      color: "#eef6ff",
      minutes: 10,
      title: pair("Numbers 0-10 review", "0-10 数字复习"),
      goal: pair("Jamie reviews numbers 0-10 through matching and movement.", "Jamie 通过配对和运动复习 0-10。"),
      steps: [
        pair("Scatter number cards 0-10 in a small area.", "把 0-10 数字卡散放在小区域。"),
        pair("Call or show a matching number.", "口头说或出示一个匹配数字。"),
        pair("Jamie places a block, car, or sticker on the match.", "Jamie 把积木、车或贴纸放到匹配数字上。"),
        pair("Record which numbers are independent.", "记录哪些数字能独立完成。")
      ],
      materials: [
        pair("Number cards 0-10", "0-10 数字卡"),
        pair("Blocks, car, or stickers", "积木、小车或贴纸"),
        pair("Checklist", "记录表")
      ],
      script: pair("Find ten. Ten is here.", "找10。10在这里。")
    }),
    leafCollage: activity({
      domain: "Prep learning / Prep 学习",
      icon: "flower",
      color: "#eef9ee",
      minutes: 12,
      title: pair("Leaf collage observation", "叶子拼贴观察"),
      goal: pair("Jamie sorts leaves and makes a simple nature collage.", "Jamie 分类叶子并做一个简单自然拼贴。"),
      steps: [
        pair("Collect safe leaves together.", "一起收集安全叶子。"),
        pair("Sort by big/small or green/brown.", "按大/小或绿/棕分类。"),
        pair("Glue or tape leaves onto paper with support.", "在辅助下把叶子粘到纸上。"),
        pair("Add one sentence for Daily Talk.", "为 Daily Talk 加一句话。")
      ],
      materials: [
        pair("Leaves", "叶子"),
        pair("Paper and glue or tape", "纸和胶水或胶带"),
        pair("Big/small or colour cards", "大/小或颜色卡")
      ],
      script: pair("Big leaf. Small leaf. I made leaves.", "大叶子。小叶子。我做了叶子。")
    }),
    juneFocus: activity({
      domain: "Prep learning / Prep 学习",
      icon: "calendar",
      color: "#fff8e5",
      minutes: 12,
      title: pair("Choose June focus", "选择 6 月重点"),
      goal: pair("Parents review data and choose the next small goals for June.", "爸妈根据记录选择 6 月的小目标。"),
      steps: [
        pair("Export records before reviewing.", "复盘前先导出记录。"),
        pair("Find the strongest communication word and hardest safety setting.", "找出最强沟通词和最难安全场景。"),
        pair("Choose one school-readiness goal and one home independence goal.", "选择一个入学准备目标和一个居家独立目标。"),
        pair("Prepare the first week of June materials.", "准备 6 月第一周材料。")
      ],
      materials: [
        pair("Exported CSV or JSON", "导出的 CSV 或 JSON"),
        pair("This app's May plan", "本网站 5 月计划"),
        pair("Sticky notes or notebook", "便利贴或笔记本")
      ],
      script: pair("This month Jamie learned. Next month we practise.", "这个月 Jamie 学会了。下个月我们练习。")
    }),
    waterBottle: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "water",
      color: "#eaf8ff",
      minutes: 6,
      title: pair("Water bottle open/help", "水瓶 open/help"),
      goal: pair("Jamie participates in opening the bottle and requests help if needed.", "Jamie 参与打开水瓶，需要时请求 help/帮忙。"),
      steps: [
        pair("Loosen the lid slightly so Jamie can succeed.", "先把瓶盖拧松一点，让 Jamie 能成功。"),
        pair("Offer the bottle and wait before helping.", "递水瓶后先等待，再帮忙。"),
        pair("Model twist-open-drink with short words.", "用短词示范 twist/open/drink 拧/开/喝。"),
        pair("Tighten the lid a little more across the week.", "本周逐渐稍微拧紧瓶盖。")
      ],
      materials: [
        pair("Water bottle", "水瓶"),
        pair("Help/open cards", "help/open 图卡"),
        pair("Towel", "毛巾")
      ],
      script: pair("Twist. Open. Drink. Help?", "拧。打开。喝。帮忙？")
    }),
    tongsPomPoms: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "tongs",
      color: "#fff1df",
      minutes: 8,
      title: pair("Tongs: 10 pom-poms", "夹子夹 10 个毛球"),
      goal: pair("Jamie strengthens hand control by moving 10 pom-poms with tongs.", "Jamie 用夹子移动 10 个毛球，增强手部控制。"),
      steps: [
        pair("Place 10 pom-poms in one bowl.", "一个碗里放 10 个毛球。"),
        pair("Show squeeze-release slowly.", "慢慢示范夹紧和松开。"),
        pair("Let Jamie move pom-poms to the second bowl.", "让 Jamie 把毛球夹到第二个碗。"),
        pair("Count together only if it stays fun.", "只有在有趣时才一起数数。")
      ],
      materials: [
        pair("Child-safe tongs", "儿童安全夹子"),
        pair("10 pom-poms", "10 个毛球"),
        pair("Two bowls", "两个碗")
      ],
      script: pair("Squeeze. Move. Drop.", "夹住。移动。放下。")
    }),
    playdoughCut: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "scissors",
      color: "#fff0e8",
      minutes: 8,
      title: pair("Playdough roll and cut", "橡皮泥搓条和剪切"),
      goal: pair("Jamie practises bilateral hand use and early cutting control.", "Jamie 练习双手配合和早期剪切控制。"),
      steps: [
        pair("Roll playdough into a thick snake.", "把橡皮泥搓成粗条。"),
        pair("Use child scissors or a plastic cutter to snip pieces.", "用儿童剪刀或塑料刀切小段。"),
        pair("Place cut pieces onto dots or circles.", "把切好的小段放到点或圆圈上。"),
        pair("Stop if hands become tense or frustrated.", "手部紧张或挫败时停止。")
      ],
      materials: [
        pair("Playdough", "橡皮泥"),
        pair("Child scissors or plastic cutter", "儿童剪刀或塑料刀"),
        pair("Dot mat", "点点底板")
      ],
      script: pair("Roll. Cut. Put here.", "搓。剪。放这里。")
    }),
    shoesSteps: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "shoes",
      color: "#eef3ff",
      minutes: 6,
      title: pair("Shoes in two steps", "穿鞋两步骤"),
      goal: pair("Jamie follows two shoe steps with visual support.", "Jamie 在视觉支持下完成穿鞋两步骤。"),
      steps: [
        pair("Show two pictures: foot in, strap on.", "出示两张图：脚进去、粘带。"),
        pair("Let Jamie do the easiest part first.", "先让 Jamie 做最容易的部分。"),
        pair("Use hand-under-hand support if needed.", "需要时用手下手辅助。"),
        pair("Praise effort and finish quickly before outings.", "表扬努力，出门前快速完成。")
      ],
      materials: [
        pair("Shoes with Velcro", "魔术贴鞋"),
        pair("Two-step visual", "两步骤图示"),
        pair("Small stool", "小凳子")
      ],
      script: pair("Foot in. Strap on.", "脚进去。粘带。")
    }),
    cleanupBox: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "check",
      color: "#edf8ef",
      minutes: 5,
      title: pair("Finished box clean-up", "完成盒收纳"),
      goal: pair("Jamie places finished items into one clear container.", "Jamie 把完成的物品放进一个清晰的完成盒。"),
      steps: [
        pair("Put the finished box beside the work area.", "把完成盒放在任务区旁边。"),
        pair("After each task, point to the box and say 'finished'.", "每个任务后指盒子，说 finished/完成。"),
        pair("Help Jamie put the item in, then close the lid.", "帮助 Jamie 放入物品并盖上盖子。"),
        pair("Use the same box daily to build predictability.", "每天用同一个盒子建立可预测性。")
      ],
      materials: [
        pair("Clear finished box", "透明完成盒"),
        pair("Finished card", "完成图卡"),
        pair("Task items", "任务物品")
      ],
      script: pair("Finished. Put in box.", "完成。放进盒子。")
    }),
    handwashing: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "water",
      color: "#eaf8ff",
      minutes: 6,
      title: pair("Handwashing visual routine", "洗手视觉 routine"),
      goal: pair("Jamie follows a short wash-rinse-dry sequence.", "Jamie 跟随洗、冲、擦的短顺序。"),
      steps: [
        pair("Show the three-step visual before turning on water.", "开水前出示三步骤图。"),
        pair("Guide hands under water and model soap.", "引导手到水下并示范肥皂。"),
        pair("Use a song or count to 5 for timing.", "用儿歌或数到 5 控制时间。"),
        pair("Finish with towel and 'all done'.", "用毛巾结束，说 all done/完成。")
      ],
      materials: [
        pair("Three-step handwashing visual", "三步骤洗手图"),
        pair("Soap and towel", "肥皂和毛巾"),
        pair("Step stool if needed", "需要时用脚凳")
      ],
      script: pair("Wash. Rinse. Dry. All done.", "洗。冲。擦。完成。")
    }),
    strawDrink: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "water",
      color: "#e9f8ff",
      minutes: 6,
      title: pair("Straw or cup drinking", "吸管/杯子喝水"),
      goal: pair("Jamie practises controlled drinking with a cup or straw.", "Jamie 练习用杯子或吸管控制喝水。"),
      steps: [
        pair("Offer a tiny amount to keep success likely.", "只给少量水，提高成功概率。"),
        pair("Model lips on straw or cup, then pause.", "示范嘴唇放到吸管或杯沿，然后暂停。"),
        pair("Help with hand position if needed.", "需要时辅助手的位置。"),
        pair("Record spills, acceptance, and independent attempts.", "记录洒水、接受度和独立尝试。")
      ],
      materials: [
        pair("Cup or straw bottle", "杯子或吸管杯"),
        pair("Towel", "毛巾"),
        pair("Drink card", "喝水图卡")
      ],
      script: pair("Drink. Small sip.", "喝水。小口。")
    }),
    tongsFood: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "tongs",
      color: "#fff4e5",
      minutes: 8,
      title: pair("Tongs food play", "夹子食物游戏"),
      goal: pair("Jamie practises grasp control with food-like play items.", "Jamie 用食物类游戏物练习抓握控制。"),
      steps: [
        pair("Use pretend food or safe large snack pieces.", "使用假食物或安全的大块点心。"),
        pair("Move items from plate to bowl using tongs.", "用夹子把物品从盘子夹到碗里。"),
        pair("Add 'eat' language only for edible items.", "只有可食物品才加入 eat/吃 的语言。"),
        pair("Keep hygiene clear if using real food.", "使用真实食物时注意卫生。")
      ],
      materials: [
        pair("Tongs", "夹子"),
        pair("Pretend food or snack pieces", "假食物或点心块"),
        pair("Plate and bowl", "盘子和碗")
      ],
      script: pair("Pick up. Put in bowl.", "夹起来。放碗里。")
    }),
    clipLeaves: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "flower",
      color: "#eef9ed",
      minutes: 8,
      title: pair("Clip leaves", "夹叶子"),
      goal: pair("Jamie uses fingers or clips to place leaves onto a line.", "Jamie 用手指或夹子把叶子放到线上。"),
      steps: [
        pair("Place a strip of tape sticky-side-up or use clothespins.", "放一条反面朝上的胶带，或使用衣夹。"),
        pair("Show picking up a leaf and placing it on the line.", "示范拿起叶子并放到线上。"),
        pair("Let Jamie arrange 5 leaves.", "让 Jamie 摆放 5 片叶子。"),
        pair("Name colour or size if attention allows.", "注意力允许时命名颜色或大小。")
      ],
      materials: [
        pair("Leaves or paper leaves", "真叶或纸叶"),
        pair("Tape strip or clothespins", "胶带条或衣夹"),
        pair("Tray", "托盘")
      ],
      script: pair("Pick leaf. Put on line.", "拿叶子。放线上。")
    }),
    lids: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "box",
      color: "#eef7ff",
      minutes: 8,
      title: pair("Open/close lids", "开/关盖子"),
      goal: pair("Jamie practises opening and closing common school containers.", "Jamie 练习打开和关闭常见学校容器。"),
      steps: [
        pair("Choose three containers with different lids.", "选择三个不同盖子的容器。"),
        pair("Start with the easiest and make success fast.", "从最容易的开始，让成功来得快。"),
        pair("Use 'open' before the action and 'close' after.", "动作前说 open/打开，动作后说 close/关上。"),
        pair("Put one small preferred item inside each container.", "每个盒里放一个小喜欢物。")
      ],
      materials: [
        pair("Three containers", "三个容器"),
        pair("Small preferred items", "小喜欢物"),
        pair("Open/close cards", "打开/关上 图卡")
      ],
      script: pair("Open. Get it. Close.", "打开。拿出来。关上。")
    }),
    bookBag: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "bag",
      color: "#edf6ff",
      minutes: 7,
      title: pair("Book bag pack", "书包装书"),
      goal: pair("Jamie places book, bottle, and hat into a bag with visual order.", "Jamie 按视觉顺序把书、水瓶和帽子放进包。"),
      steps: [
        pair("Show three pictures in order.", "按顺序出示三张图片。"),
        pair("Hand one item at a time.", "一次递一个物品。"),
        pair("Prompt 'in bag' and let Jamie push it in.", "提示 in bag/放包里，让 Jamie 推进去。"),
        pair("Zip or close the bag with help.", "辅助拉上或关上书包。")
      ],
      materials: [
        pair("Bag", "书包"),
        pair("Book, bottle, hat", "书、水瓶、帽子"),
        pair("Three-step visual", "三步骤图")
      ],
      script: pair("Book in bag. Bottle in bag. Zip.", "书放包里。水瓶放包里。拉上。")
    }),
    washFruit: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "water",
      color: "#eaf9f5",
      minutes: 8,
      title: pair("Wash fruit routine", "洗水果 routine"),
      goal: pair("Jamie follows wash, dry, eat steps with a real snack.", "Jamie 用真实点心跟随洗、擦、吃步骤。"),
      steps: [
        pair("Use one fruit piece that Jamie accepts.", "使用 Jamie 接受的一种水果。"),
        pair("Show wash, dry, eat pictures.", "出示洗、擦、吃图片。"),
        pair("Let Jamie hold fruit under water with support.", "辅助 Jamie 把水果放到水下。"),
        pair("Offer a tiny bite or let him place it on plate.", "提供小口吃，或让他放到盘子上。")
      ],
      materials: [
        pair("Fruit", "水果"),
        pair("Wash/dry/eat visual", "洗/擦/吃 图示"),
        pair("Plate and towel", "盘子和毛巾")
      ],
      script: pair("Wash. Dry. Eat.", "洗。擦。吃。")
    }),
    writeNumbers: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "pencil",
      color: "#fff6e8",
      minutes: 8,
      title: pair("Write 0, 1, 2", "书写 0、1、2"),
      goal: pair("Jamie traces or forms early numbers using large movements.", "Jamie 用大动作描或写早期数字。"),
      steps: [
        pair("Start with finger tracing on a large card.", "先用手指在大卡上描。"),
        pair("Use thick crayon or marker for 0, 1, 2.", "用粗蜡笔或马克笔写 0、1、2。"),
        pair("Accept partial marks and focus on direction.", "接受部分笔迹，关注方向。"),
        pair("Finish by matching written number to a block quantity.", "最后把写出的数字配到积木数量。")
      ],
      materials: [
        pair("Large number cards", "大数字卡"),
        pair("Thick crayon or marker", "粗蜡笔或马克笔"),
        pair("Blocks", "积木")
      ],
      script: pair("Start here. Round for zero.", "从这里开始。圆圈是0。")
    }),
    bodyParts: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "face",
      color: "#fff0ef",
      minutes: 6,
      title: pair("Body parts point", "身体部位指认"),
      goal: pair("Jamie points to common body parts during a playful song.", "Jamie 在歌曲游戏中指认常见身体部位。"),
      steps: [
        pair("Use mirror or adult face first.", "先用镜子或成人脸。"),
        pair("Point to nose, mouth, hands, feet with rhythm.", "有节奏地指鼻子、嘴、手、脚。"),
        pair("Pause before each word for Jamie to anticipate.", "每个词前暂停，让 Jamie 预期。"),
        pair("Let Jamie choose the next body part card.", "让 Jamie 选择下一个身体部位图卡。")
      ],
      materials: [
        pair("Mirror", "镜子"),
        pair("Body part cards", "身体部位图卡"),
        pair("Song or rhythm", "歌曲或节奏")
      ],
      script: pair("Touch nose. Touch hands.", "摸鼻子。摸手。")
    }),
    stickerSequence: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "stickers",
      color: "#fff7e8",
      minutes: 8,
      title: pair("Sticker sequence", "贴纸顺序"),
      goal: pair("Jamie peels or places stickers left to right in a simple sequence.", "Jamie 从左到右撕或贴贴纸，形成简单顺序。"),
      steps: [
        pair("Pre-peel sticker edges if needed.", "需要时先帮忙揭起贴纸边缘。"),
        pair("Mark three target spots on paper.", "在纸上标三个目标点。"),
        pair("Place stickers left to right while saying first, next, last.", "从左到右贴，并说 first/next/last。"),
        pair("Put the paper in the finished box.", "把纸放进完成盒。")
      ],
      materials: [
        pair("Stickers", "贴纸"),
        pair("Paper with three dots", "带三个点的纸"),
        pair("Finished box", "完成盒")
      ],
      script: pair("First sticker. Next sticker. Last sticker.", "第一张贴纸。下一张贴纸。最后一张贴纸。")
    }),
    schoolBag: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "bag",
      color: "#edf6ff",
      minutes: 8,
      title: pair("School bag routine", "书包 routine"),
      goal: pair("Jamie practises packing and unpacking school items.", "Jamie 练习装入和取出学校物品。"),
      steps: [
        pair("Use a three-item visual list.", "使用三物品视觉清单。"),
        pair("Ask Jamie to put in bottle, hat, and lunchbox.", "请 Jamie 放入水瓶、帽子和饭盒。"),
        pair("Then reverse it: take out each item.", "然后反向练习：逐个取出。"),
        pair("Keep this routine similar to school mornings.", "让 routine 接近上学早晨。")
      ],
      materials: [
        pair("Backpack", "书包"),
        pair("Bottle, hat, lunchbox", "水瓶、帽子、饭盒"),
        pair("Visual checklist", "视觉清单")
      ],
      script: pair("In bag. Out bag. All done.", "放包里。从包里拿出。完成。")
    }),
    handOverMoney: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "money",
      color: "#fff7df",
      minutes: 8,
      title: pair("Hand over card or money", "递卡/递钱"),
      goal: pair("Jamie practises giving an item to another person and waiting for return.", "Jamie 练习把物品递给别人并等待返回。"),
      steps: [
        pair("Use a pretend card, coin, or token.", "使用假卡、硬币或代币。"),
        pair("Prompt Jamie to place it into the adult's open hand.", "提示 Jamie 放到成人打开的手中。"),
        pair("Adult gives item back or gives purchased item.", "成人归还物品或给购买物。"),
        pair("Pair with shop words if he is regulated.", "状态稳定时配合购物词。")
      ],
      materials: [
        pair("Pretend card or coin", "假卡或硬币"),
        pair("Adult open-hand visual", "成人伸手图示"),
        pair("Small item to buy", "小商品")
      ],
      script: pair("Give card. Wait. Thank you.", "递卡。等待。谢谢。")
    }),
    cutPastePhoto: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "scissors",
      color: "#fff2ea",
      minutes: 10,
      title: pair("Cut and paste photos", "剪贴照片"),
      goal: pair("Jamie helps cut or paste a photo for Daily Talk.", "Jamie 参与剪或贴一张 Daily Talk 照片。"),
      steps: [
        pair("Pre-cut most of the photo edge if scissors are hard.", "剪刀困难时，成人先剪好大部分边缘。"),
        pair("Let Jamie snip one edge or choose where to paste.", "让 Jamie 剪一小段边缘或选择贴哪里。"),
        pair("Use glue stick with hand support.", "用胶棒时提供手部辅助。"),
        pair("Add one bilingual sentence underneath.", "在下方加一句双语句子。")
      ],
      materials: [
        pair("Printed photo", "打印照片"),
        pair("Child scissors and glue stick", "儿童剪刀和胶棒"),
        pair("Daily Talk page", "Daily Talk 页面")
      ],
      script: pair("Cut. Glue. Press. I like this.", "剪。涂胶。按一按。我喜欢这个。")
    }),
    carryBag: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "bag",
      color: "#eef8f3",
      minutes: 6,
      title: pair("Carry heavy bag safely", "安全提重袋"),
      goal: pair("Jamie gets proprioceptive input by carrying a safe weighted bag.", "Jamie 通过提安全重量袋获得本体觉输入。"),
      steps: [
        pair("Use a bag that is heavy enough to feel but safe.", "使用有重量感但安全的袋子。"),
        pair("Carry it from one room to another with adult nearby.", "成人在旁边，提袋从一个房间到另一个房间。"),
        pair("Use heavy/light language.", "使用 heavy/light 重/轻 语言。"),
        pair("Stop before fatigue or unsafe posture.", "疲劳或姿势不安全前停止。")
      ],
      materials: [
        pair("Small weighted bag", "小重量袋"),
        pair("Clear walking path", "清晰安全路线"),
        pair("Heavy/light cards", "重/轻 图卡")
      ],
      script: pair("Heavy bag. Carry. Put down.", "重袋子。提。放下。")
    }),
    emotionStickers: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "face",
      color: "#fff1f0",
      minutes: 8,
      title: pair("Emotion stickers", "情绪贴纸"),
      goal: pair("Jamie places happy/sad stickers onto matching faces.", "Jamie 把开心/难过贴纸贴到对应表情。"),
      steps: [
        pair("Show two large face outlines.", "出示两个大表情轮廓。"),
        pair("Offer one sticker at a time.", "一次给一张贴纸。"),
        pair("Help peel if needed, then let Jamie place it.", "需要时帮忙揭起，再让 Jamie 贴。"),
        pair("Name the emotion after placement.", "贴好后命名情绪。")
      ],
      materials: [
        pair("Happy/sad stickers", "开心/难过 贴纸"),
        pair("Face outlines", "表情轮廓纸"),
        pair("Tray", "托盘")
      ],
      script: pair("Happy sticker. Sad sticker.", "开心贴纸。难过贴纸。")
    }),
    finishedBoxIndependent: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "check",
      color: "#eef8ef",
      minutes: 8,
      title: pair("Independent finished box", "独立完成盒"),
      goal: pair("Jamie uses the finished box with less adult prompting.", "Jamie 在较少成人提示下使用完成盒。"),
      steps: [
        pair("Put three familiar tasks on the table.", "桌上放三个熟悉任务。"),
        pair("After each task, pause and point only once.", "每个任务后暂停，只指一次。"),
        pair("Wait for Jamie to place it in the finished box.", "等待 Jamie 放进完成盒。"),
        pair("Record whether it was independent or prompted.", "记录独立还是提示后完成。")
      ],
      materials: [
        pair("Finished box", "完成盒"),
        pair("Three familiar tasks", "三个熟悉任务"),
        pair("Finished card", "完成图卡")
      ],
      script: pair("Finished. Where does it go?", "完成。放哪里？")
    }),
    organiseMaterials: activity({
      domain: "Fine motor + ADL / 精细动作与自理",
      icon: "check",
      color: "#f4f8ff",
      minutes: 12,
      title: pair("Organise June materials", "整理 6 月材料"),
      goal: pair("Parents and Jamie sort cards and tools into labelled containers.", "爸妈和 Jamie 把图卡与工具整理到标记盒中。"),
      steps: [
        pair("Sort cards into safety, communication, learning, and ADL groups.", "把图卡分为安全、沟通、学习、自理四类。"),
        pair("Let Jamie place cards into containers.", "让 Jamie 把卡片放进盒子。"),
        pair("Remove materials that were confusing or unused.", "移除混淆或未使用材料。"),
        pair("Prepare one small daily basket for next week.", "为下周准备一个每日小篮子。")
      ],
      materials: [
        pair("Four labelled containers", "四个标记盒"),
        pair("May cards and tools", "5 月图卡和工具"),
        pair("Daily basket", "每日小篮子")
      ],
      script: pair("Sort cards. Put in. Ready for June.", "分类卡片。放进去。6月准备好。")
    })
  };

  const planDays = [
    day("2026-05-04", "Week 1 / 第1周", pair("Safe stopping + clear requesting", "安全停下 + 清晰请求"), pair("Start with very short, high-success routines: STOP, more/go, 0-3 numbers, and water bottle help.", "从短而容易成功的 routine 开始：STOP、more/go、0-3 数字和水瓶 help。"), ["doorStop", "bubblesMoreGo", "number03", "waterBottle", "cleanupBox"]),
    day("2026-05-05", "Week 1 / 第1周", pair("Boundary, help, sound play", "边界、求助、声音游戏"), pair("Use red-line boundaries and transparent containers to create natural communication chances.", "用红线边界和透明盒创造自然沟通机会。"), ["redLineStop", "helpOpenBox", "satMatch", "tongsPomPoms", "cleanupBox"]),
    day("2026-05-06", "Week 1 / 第1周", pair("Transitions and patterns", "转换与模式"), pair("First-Then reduces transition pressure while AB pattern and playdough build school readiness.", "First-Then 降低转换压力，同时用 AB 模式和橡皮泥建立入学准备。"), ["transitionFirstThen", "finishedAgain", "abPattern", "playdoughCut", "cleanupBox"]),
    day("2026-05-07", "Week 1 / 第1周", pair("Tolerating no + early counting", "接受没有了 + 早期数量"), pair("Practise not available with alternatives, then keep table work concrete and visual.", "练习没有了和替代选择，再做具体、可视化桌面任务。"), ["notAvailable", "dotCards", "shoesSteps", "finishedBreak", "cleanupBox"]),
    day("2026-05-08", "Week 1 / 第1周", pair("Car safety + snack communication", "车边安全 + 点心沟通"), pair("Connect safety words to the car routine and use snack time for many tiny communication chances.", "把安全词连接到车边 routine，并用点心时间创造多次沟通机会。"), ["carStop", "snackDrink", "bookSequence", "waterBottle", "cleanupBox"]),
    day("2026-05-09", "Week 1 / 第1周", pair("Outdoor generalisation", "户外泛化"), pair("Move STOP, go/more, and size language into a park or backyard setting.", "把 STOP、go/more 和大小语言带到公园或后院。"), ["parkStop", "bubblesMoreGo", "longShort", "shoesSteps", "handwashing"]),
    day("2026-05-10", "Week 1 / 第1周", pair("Low-demand review", "低压力复习"), pair("Use family photos and routines to review communication without adding pressure.", "用家庭照片和 routine 做低压力复习。"), ["quietCorner", "choosePhoto", "photoTalk", "handwashing", "reviewTalk"]),
    day("2026-05-11", "Week 2 / 第2周", pair("Heavy work before table", "桌面前本体觉输入"), pair("Give body input first, then use bubbles and mouth-sound play for communication and attention.", "先给身体输入，再用泡泡和口型声音游戏做沟通与注意。"), ["carryBag", "bubblesMoreGo", "piMatch", "strawDrink", "cleanupBox"]),
    day("2026-05-12", "Week 2 / 第2周", pair("Stop/go with snack and number shop", "停走 + 点心 + 数字商店"), pair("Combine movement regulation with repeated requesting and pretend-shop counting.", "结合动作调节、重复请求和假装商店点数。"), ["musicStop", "smallSnack", "numberShop13", "tongsFood", "cleanupBox"]),
    day("2026-05-13", "Week 2 / 第2周", pair("Schedule, repair, nature", "日程、修复沟通、自然观察"), pair("Use playful mistakes to invite Jamie to correct you, then connect learning to nature items.", "用成人装傻邀请 Jamie 纠正，再把学习连接到自然物。"), ["transitionFirstThen", "playDumbFlower", "natureObserve", "clipLeaves", "reviewTalk"]),
    day("2026-05-14", "Week 2 / 第2周", pair("Alternative choices + shapes", "替代选择 + 形状"), pair("Practise 'not available' calmly and build problem-solving through missing pieces and shape sorting.", "平静练习没有了，并用缺拼图与形状分类建立解决问题能力。"), ["notAvailable", "missingPuzzle", "shapeSort", "lids", "cleanupBox"]),
    day("2026-05-15", "Week 2 / 第2周", pair("Safe body + play obstruction", "安全身体 + 游戏阻挡"), pair("Use sensory regulation, blocked play, and track story to practise waiting and communication repair.", "用感官调节、阻挡游戏和轨道故事练习等待与沟通修复。"), ["quietCorner", "marbleRun", "trackStory", "lids", "finishedBreak"]),
    day("2026-05-16", "Week 2 / 第2周", pair("Library routine", "图书馆 routine"), pair("Generalise first-then, help, book talk, and bag packing into a library-style routine.", "把 first-then、help、绘本表达和装包泛化到图书馆 routine。"), ["transitionFirstThen", "helpFindBook", "photoTalk", "bookBag", "reviewTalk"]),
    day("2026-05-17", "Week 2 / 第2周", pair("Reinforcer review", "强化物复盘"), pair("Find what motivates Jamie most and use photos, sorting, and fruit washing for easy success.", "找出 Jamie 最有效强化物，并用照片、分类和洗水果建立成功体验。"), ["choosePhoto", "photoTalk", "shapeSort", "washFruit", "reviewTalk"]),
    day("2026-05-18", "Week 3 / 第3周", pair("Numbers and handwriting", "数字与书写"), pair("Prepare the body, then move from requesting numbers to recognising and tracing them.", "先准备身体，再从请求数字过渡到识别和描写数字。"), ["carryBag", "wantNumbers", "number06", "writeNumbers", "cleanupBox"]),
    day("2026-05-19", "Week 3 / 第3周", pair("Race, ramp, mouth sounds", "竞走、坡道、口型声音"), pair("Use fast favourite actions to create go/more requests, then slow down for body-part attention.", "用喜欢的快速动作创造 go/more 请求，再慢下来做身体部位注意。"), ["redLineStop", "carRamp", "mnMatch", "bodyParts", "finishedBreak"]),
    day("2026-05-20", "Week 3 / 第3周", pair("Low-sensory table work", "低感官负荷桌面"), pair("Keep the table calm while practising help/open, patterning, and playdough motor work.", "保持桌面安静，练习 help/open、模式和橡皮泥精细动作。"), ["quietCorner", "helpOpenPlaydough", "patternABC", "playdoughCut", "cleanupBox"]),
    day("2026-05-21", "Week 3 / 第3周", pair("Story order and break", "故事顺序与休息"), pair("Use first-work-then-music to support short table work and three-picture retell.", "用先任务再音乐支持短桌面和三图复述。"), ["transitionFirstThen", "finishedBreak", "retell3", "stickerSequence", "reviewTalk"]),
    day("2026-05-22", "Week 3 / 第3周", pair("School-bag readiness", "书包入学准备"), pair("Practise school-bag items, drink/toilet cues, and today/yesterday photo talk.", "练习书包物品、喝水/厕所提示和今天/昨天照片表达。"), ["schoolBag", "drinkToiletCue", "todayYesterday", "bookBag", "reviewTalk"]),
    day("2026-05-23", "Week 3 / 第3周", pair("Shop or outing practice", "商店/外出练习"), pair("Use a real or pretend shop routine to practise waiting, requesting, paying, and counting.", "用真实或假装商店 routine 练习等待、请求、付钱和点数。"), ["carStop", "shopWords", "numberShop15", "handOverMoney", "handwashing"]),
    day("2026-05-24", "Week 3 / 第3周", pair("Weekly review and Daily Talk", "周复习与 Daily Talk"), pair("Make one shareable page from favourite photos, likes, and simple language.", "用喜欢的照片、喜好和简单语言做一页可分享内容。"), ["choosePhoto", "reviewTalk", "photoTalk", "cutPastePhoto", "quietCorner"]),
    day("2026-05-25", "Week 4 / 第4周", pair("Traffic-light regulation", "红绿灯调节"), pair("Use red/green visual rules for stopping, going, sorting, and movement patterns.", "用红/绿视觉规则练习停走、分类和动作模式。"), ["trafficStop", "musicStop", "movementPattern", "shapeSort", "cleanupBox"]),
    day("2026-05-26", "Week 4 / 第4周", pair("Car park and heavy/light", "停车场与重轻"), pair("Strengthen car-park waiting, help/open snack box, and heavy/light body awareness.", "加强停车场等待、打开点心盒求助和重/轻身体感知。"), ["carStop", "helpOpenBox", "heavyLight", "carryBag", "snackDrink"]),
    day("2026-05-27", "Week 4 / 第4周", pair("Emotions and calm choices", "情绪与安静选择"), pair("Make calm choices explicit and pair happy/sad language with simple visuals.", "明确安静选择，并把开心/难过语言配合简单视觉。"), ["quietCorner", "calmMusic", "emotions", "emotionStickers", "reviewTalk"]),
    day("2026-05-28", "Week 4 / 第4周", pair("Transition object + photos", "转换物 + 照片"), pair("Use an object to support transitions and let Jamie communicate through photos.", "用转换物支持转场，并让 Jamie 通过照片表达。"), ["transitionFirstThen", "inOutOnOff", "cameraPhoto", "choosePhoto", "cleanupBox"]),
    day("2026-05-29", "Week 4 / 第4周", pair("Monthly skill check", "月度技能检查"), pair("Review STOP, core words, numbers 0-10, and independent finished-box use.", "复习 STOP、核心词、0-10 数字和独立完成盒。"), ["stopReview", "observeCoreWords", "number010", "finishedBoxIndependent", "reviewTalk"]),
    day("2026-05-30", "Week 4 / 第4周", pair("Community generalisation", "社区泛化"), pair("Take the most useful May skills into a park, library, or backyard setting.", "把 5 月最有用技能带到公园、图书馆或后院环境。"), ["parkStop", "bubblesMoreGo", "natureObserve", "leafCollage", "handwashing"]),
    day("2026-05-31", "Week 4 / 第4周", pair("May review + June setup", "5 月复盘 + 6 月准备"), pair("Export records, choose June targets, and organise the materials that worked best.", "导出记录，选择 6 月目标，并整理最有效材料。"), ["reviewTalk", "observeCoreWords", "juneFocus", "organiseMaterials", "quietCorner"])
  ];

  const plans = Object.fromEntries(planDays.map((entry) => [entry.date, entry]));
  const dateKeys = Object.keys(plans).sort();

  const icons = {
    stop: svg(`<circle cx="60" cy="60" r="52" fill="#ffdc68" stroke="#173047" stroke-width="5"/><path d="M33 63h54" stroke="#173047" stroke-width="9" stroke-linecap="round"/><path d="M45 39l7 44M62 35l2 48M79 42L72 82" stroke="#173047" stroke-width="6" stroke-linecap="round"/>`),
    car: svg(`<rect x="22" y="50" width="76" height="31" rx="9" fill="#76aee8" stroke="#173047" stroke-width="5"/><path d="M38 50l10-18h25l13 18" fill="#fff" stroke="#173047" stroke-width="5"/><circle cx="41" cy="84" r="10" fill="#173047"/><circle cx="82" cy="84" r="10" fill="#173047"/>`),
    tree: svg(`<path d="M60 96V62" stroke="#815f3c" stroke-width="10" stroke-linecap="round"/><circle cx="48" cy="52" r="23" fill="#74b88a" stroke="#173047" stroke-width="5"/><circle cx="72" cy="49" r="25" fill="#8ed6c3" stroke="#173047" stroke-width="5"/><circle cx="61" cy="30" r="22" fill="#b6dc79" stroke="#173047" stroke-width="5"/>`),
    music: svg(`<path d="M77 28v47a16 16 0 1 1-10-15V37l-36 8v39a16 16 0 1 1-10-15V39z" fill="#9a7cc6" stroke="#173047" stroke-width="5" stroke-linejoin="round"/>`),
    traffic: svg(`<rect x="42" y="18" width="36" height="84" rx="12" fill="#173047"/><circle cx="60" cy="38" r="10" fill="#ee8d78"/><circle cx="60" cy="60" r="10" fill="#f7c95f"/><circle cx="60" cy="82" r="10" fill="#74b88a"/>`),
    firstThen: svg(`<rect x="14" y="28" width="40" height="58" rx="8" fill="#fff" stroke="#173047" stroke-width="5"/><rect x="66" y="28" width="40" height="58" rx="8" fill="#fff" stroke="#173047" stroke-width="5"/><path d="M28 55h12M80 55h12M58 57h6" stroke="#173047" stroke-width="6" stroke-linecap="round"/><path d="M88 47l10 10-10 10" fill="none" stroke="#173047" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`),
    calm: svg(`<circle cx="60" cy="60" r="42" fill="#eaf5ff" stroke="#173047" stroke-width="5"/><path d="M38 63c10 12 34 12 44 0M43 50h.1M77 50h.1" stroke="#173047" stroke-width="7" stroke-linecap="round"/><path d="M34 26c15 8 37 8 52 0" fill="none" stroke="#76aee8" stroke-width="6" stroke-linecap="round"/>`),
    bubbles: svg(`<circle cx="43" cy="72" r="18" fill="#d9f7ff" stroke="#173047" stroke-width="5"/><circle cx="70" cy="49" r="15" fill="#eaffff" stroke="#173047" stroke-width="5"/><circle cx="82" cy="78" r="11" fill="#fff" stroke="#173047" stroke-width="5"/><path d="M24 94l17-17" stroke="#173047" stroke-width="6" stroke-linecap="round"/>`),
    box: svg(`<path d="M23 43l37-19 37 19-37 19z" fill="#f7c95f" stroke="#173047" stroke-width="5" stroke-linejoin="round"/><path d="M23 43v41l37 20 37-20V43" fill="#fff7df" stroke="#173047" stroke-width="5" stroke-linejoin="round"/><path d="M60 62v42" stroke="#173047" stroke-width="5"/>`),
    again: svg(`<path d="M82 44A28 28 0 1 0 86 73" fill="none" stroke="#173047" stroke-width="8" stroke-linecap="round"/><path d="M82 24v24h-24" fill="none" stroke="#173047" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="60" r="10" fill="#74b88a"/>`),
    choice: svg(`<rect x="16" y="30" width="38" height="58" rx="8" fill="#fff" stroke="#173047" stroke-width="5"/><rect x="66" y="30" width="38" height="58" rx="8" fill="#fff" stroke="#173047" stroke-width="5"/><circle cx="35" cy="59" r="11" fill="#ee8d78"/><path d="M79 70l10-22 10 22z" fill="#76aee8" stroke="#173047" stroke-width="4"/>`),
    snack: svg(`<circle cx="47" cy="63" r="27" fill="#f7c95f" stroke="#173047" stroke-width="5"/><path d="M71 42c15 3 24 17 21 32-3 13-14 22-27 23" fill="none" stroke="#173047" stroke-width="5" stroke-linecap="round"/><path d="M39 50h.1M54 64h.1M42 76h.1" stroke="#173047" stroke-width="6" stroke-linecap="round"/>`),
    flower: svg(`<circle cx="60" cy="58" r="11" fill="#f7c95f" stroke="#173047" stroke-width="4"/><circle cx="60" cy="32" r="15" fill="#ee8d78" stroke="#173047" stroke-width="4"/><circle cx="60" cy="84" r="15" fill="#ee8d78" stroke="#173047" stroke-width="4"/><circle cx="34" cy="58" r="15" fill="#9a7cc6" stroke="#173047" stroke-width="4"/><circle cx="86" cy="58" r="15" fill="#76aee8" stroke="#173047" stroke-width="4"/><path d="M60 95v14" stroke="#74b88a" stroke-width="7" stroke-linecap="round"/>`),
    puzzle: svg(`<path d="M24 34h28a11 11 0 1 1 16 0h28v28a11 11 0 1 0 0 16v28H24V78a11 11 0 1 0 0-16z" fill="#f1eaff" stroke="#173047" stroke-width="5" stroke-linejoin="round"/>`),
    ramp: svg(`<path d="M20 88h82L20 38z" fill="#76aee8" stroke="#173047" stroke-width="5" stroke-linejoin="round"/><circle cx="37" cy="74" r="10" fill="#ee8d78" stroke="#173047" stroke-width="4"/><path d="M63 30h21" stroke="#173047" stroke-width="7" stroke-linecap="round"/>`),
    book: svg(`<path d="M20 28h36c8 0 12 5 12 12v58c0-7-5-11-12-11H20z" fill="#fff" stroke="#173047" stroke-width="5"/><path d="M100 28H68c-8 0-12 5-12 12v58c0-7 5-11 12-11h32z" fill="#eaf7ff" stroke="#173047" stroke-width="5"/><path d="M33 45h17M72 45h17M33 59h17M72 59h17" stroke="#173047" stroke-width="4" stroke-linecap="round"/>`),
    photo: svg(`<rect x="20" y="32" width="80" height="60" rx="8" fill="#fff" stroke="#173047" stroke-width="5"/><circle cx="45" cy="52" r="9" fill="#f7c95f" stroke="#173047" stroke-width="4"/><path d="M28 84l25-24 17 16 11-10 12 18" fill="#8ed6c3" stroke="#173047" stroke-width="4" stroke-linejoin="round"/>`),
    numbers: svg(`<rect x="19" y="24" width="31" height="42" rx="7" fill="#fff" stroke="#173047" stroke-width="5"/><rect x="70" y="54" width="31" height="42" rx="7" fill="#fff" stroke="#173047" stroke-width="5"/><circle cx="35" cy="45" r="8" fill="#f7c95f"/><circle cx="82" cy="72" r="5" fill="#76aee8"/><circle cx="90" cy="84" r="5" fill="#76aee8"/>`),
    cards: svg(`<rect x="28" y="26" width="42" height="58" rx="8" fill="#fff" stroke="#173047" stroke-width="5" transform="rotate(-10 49 55)"/><rect x="52" y="34" width="42" height="58" rx="8" fill="#eaf7ff" stroke="#173047" stroke-width="5" transform="rotate(8 73 63)"/><path d="M47 55h13M69 64h14" stroke="#173047" stroke-width="5" stroke-linecap="round"/>`),
    pattern: svg(`<circle cx="31" cy="60" r="14" fill="#ee8d78" stroke="#173047" stroke-width="4"/><rect x="52" y="46" width="28" height="28" rx="6" fill="#76aee8" stroke="#173047" stroke-width="4"/><circle cx="96" cy="60" r="14" fill="#ee8d78" stroke="#173047" stroke-width="4"/><path d="M22 94h84" stroke="#173047" stroke-width="5" stroke-linecap="round"/>`),
    dots: svg(`<rect x="22" y="22" width="76" height="76" rx="10" fill="#fff" stroke="#173047" stroke-width="5"/><circle cx="45" cy="45" r="8" fill="#f7c95f"/><circle cx="75" cy="45" r="8" fill="#f7c95f"/><circle cx="60" cy="72" r="8" fill="#f7c95f"/>`),
    sort: svg(`<path d="M24 30h72M24 60h72M24 90h72" stroke="#173047" stroke-width="6" stroke-linecap="round"/><rect x="28" y="21" width="22" height="18" rx="4" fill="#76aee8"/><rect x="28" y="51" width="42" height="18" rx="4" fill="#74b88a"/><rect x="28" y="81" width="60" height="18" rx="4" fill="#ee8d78"/>`),
    mouth: svg(`<circle cx="60" cy="58" r="42" fill="#fff3f1" stroke="#173047" stroke-width="5"/><path d="M39 70c11 11 31 11 42 0" fill="#ee8d78" stroke="#173047" stroke-width="5" stroke-linecap="round"/><path d="M44 48h.1M76 48h.1" stroke="#173047" stroke-width="7" stroke-linecap="round"/>`),
    shape: svg(`<circle cx="34" cy="58" r="17" fill="#f7c95f" stroke="#173047" stroke-width="4"/><rect x="56" y="41" width="34" height="34" rx="5" fill="#76aee8" stroke="#173047" stroke-width="4"/><path d="M75 95l18-31 18 31z" fill="#ee8d78" stroke="#173047" stroke-width="4" stroke-linejoin="round"/>`),
    calendar: svg(`<rect x="22" y="28" width="76" height="70" rx="8" fill="#fff" stroke="#173047" stroke-width="5"/><path d="M22 49h76M42 20v18M78 20v18" stroke="#173047" stroke-width="5" stroke-linecap="round"/><rect x="36" y="62" width="13" height="13" fill="#f7c95f"/><rect x="57" y="62" width="13" height="13" fill="#74b88a"/><rect x="78" y="62" width="13" height="13" fill="#76aee8"/>`),
    water: svg(`<path d="M55 18h22l7 82H48z" fill="#dff6ff" stroke="#173047" stroke-width="5" stroke-linejoin="round"/><path d="M53 18h26v14H53zM50 62h32" stroke="#173047" stroke-width="5"/><path d="M28 65c8 12 8 18 0 26-8-8-8-14 0-26z" fill="#76aee8" stroke="#173047" stroke-width="4"/>`),
    tongs: svg(`<path d="M49 20l-20 76M70 20l20 76M45 39h30" stroke="#173047" stroke-width="8" stroke-linecap="round"/><circle cx="30" cy="96" r="10" fill="#74b88a" stroke="#173047" stroke-width="4"/><circle cx="90" cy="96" r="10" fill="#74b88a" stroke="#173047" stroke-width="4"/>`),
    scissors: svg(`<circle cx="37" cy="82" r="13" fill="#fff" stroke="#173047" stroke-width="5"/><circle cx="67" cy="82" r="13" fill="#fff" stroke="#173047" stroke-width="5"/><path d="M50 70L87 28M55 69L30 28" stroke="#173047" stroke-width="7" stroke-linecap="round"/><path d="M57 64l33 34" stroke="#ee8d78" stroke-width="6" stroke-linecap="round"/>`),
    shoes: svg(`<path d="M24 70c18 7 35 4 50-8 12 8 21 14 30 17 4 1 5 12-2 14H28c-9 0-12-14-4-23z" fill="#76aee8" stroke="#173047" stroke-width="5" stroke-linejoin="round"/><path d="M51 65l17 15M62 59l19 16" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`),
    check: svg(`<rect x="23" y="25" width="74" height="74" rx="12" fill="#edf8ef" stroke="#173047" stroke-width="5"/><path d="M39 62l14 15 30-35" fill="none" stroke="#74b88a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`),
    playdough: svg(`<ellipse cx="60" cy="73" rx="43" ry="22" fill="#ee8d78" stroke="#173047" stroke-width="5"/><path d="M32 71c10-18 45-25 57-4" fill="none" stroke="#fff0e7" stroke-width="8" stroke-linecap="round"/>`),
    toilet: svg(`<path d="M39 26h42v38c0 16-10 29-28 29H39z" fill="#fff" stroke="#173047" stroke-width="5"/><path d="M33 26h54M44 93h33M51 64h21" stroke="#173047" stroke-width="5" stroke-linecap="round"/>`),
    bag: svg(`<path d="M34 42h52l8 58H26z" fill="#f7c95f" stroke="#173047" stroke-width="5" stroke-linejoin="round"/><path d="M45 42c0-18 30-18 30 0" fill="none" stroke="#173047" stroke-width="5" stroke-linecap="round"/><path d="M45 63h30" stroke="#173047" stroke-width="5" stroke-linecap="round"/>`),
    face: svg(`<circle cx="60" cy="60" r="43" fill="#fff3df" stroke="#173047" stroke-width="5"/><path d="M43 52h.1M77 52h.1" stroke="#173047" stroke-width="8" stroke-linecap="round"/><path d="M42 72c10 10 26 10 36 0" fill="none" stroke="#173047" stroke-width="6" stroke-linecap="round"/>`),
    pencil: svg(`<path d="M31 88l11-31 35-35 20 20-35 35z" fill="#f7c95f" stroke="#173047" stroke-width="5" stroke-linejoin="round"/><path d="M77 22l20 20M31 88l-6 18 17-7" stroke="#173047" stroke-width="5" stroke-linejoin="round"/>`),
    stickers: svg(`<rect x="24" y="28" width="72" height="72" rx="12" fill="#fff" stroke="#173047" stroke-width="5"/><circle cx="48" cy="56" r="14" fill="#f7c95f" stroke="#173047" stroke-width="4"/><path d="M72 72l18 18V72z" fill="#d9f7ff" stroke="#173047" stroke-width="4" stroke-linejoin="round"/>`),
    money: svg(`<rect x="21" y="39" width="78" height="48" rx="8" fill="#e9f8eb" stroke="#173047" stroke-width="5"/><circle cx="60" cy="63" r="14" fill="#f7c95f" stroke="#173047" stroke-width="4"/><path d="M35 53h9M76 73h9" stroke="#173047" stroke-width="5" stroke-linecap="round"/>`)
  };

  const photoScenes = [
    { title: pair("Space moon", "太空月球"), src: "./assets/jamie-scenes/jamie-space-moon.jpg" },
    { title: pair("Rainforest", "雨林"), src: "./assets/jamie-scenes/jamie-rainforest.jpg" },
    { title: pair("University lawn", "大学草坪"), src: "./assets/jamie-scenes/jamie-university-lawn.jpg" },
    { title: pair("Grassland meadow", "草地花田"), src: "./assets/jamie-scenes/jamie-grassland-meadow.jpg" },
    { title: pair("Desert dunes", "沙漠沙丘"), src: "./assets/jamie-scenes/jamie-desert-dunes.jpg" },
    { title: pair("Beach tide", "海滩浅潮"), src: "./assets/jamie-scenes/jamie-beach-tide.jpg" },
    { title: pair("Library corner", "图书馆角落"), src: "./assets/jamie-scenes/jamie-library-corner.jpg" },
    { title: pair("Science lab", "科学实验室"), src: "./assets/jamie-scenes/jamie-science-lab.jpg" },
    { title: pair("Botanical garden", "植物园"), src: "./assets/jamie-scenes/jamie-botanical-garden.jpg" },
    { title: pair("Snowy mountain", "雪山"), src: "./assets/jamie-scenes/jamie-snowy-mountain.jpg" },
    { title: pair("Dinosaur museum", "恐龙博物馆"), src: "./assets/jamie-scenes/jamie-dinosaur-museum.jpg" },
    { title: pair("Observatory", "天文台"), src: "./assets/jamie-scenes/jamie-observatory.jpg" },
    { title: pair("Pool deck", "泳池学习区"), src: "./assets/jamie-scenes/jamie-pool-deck.jpg" },
    { title: pair("Art gallery", "艺术馆"), src: "./assets/jamie-scenes/jamie-art-gallery.jpg" },
    { title: pair("Playground art", "操场画画"), src: "./assets/jamie-scenes/jamie-playground-art.jpg" },
    { title: pair("University studio", "大学画室"), src: "./assets/jamie-scenes/jamie-university-studio.jpg" },
    { title: pair("Forest art camp", "森林画画营"), src: "./assets/jamie-scenes/jamie-forest-art-camp.jpg" },
    { title: pair("Space classroom", "太空教室"), src: "./assets/jamie-scenes/jamie-space-classroom.jpg" },
    { title: pair("School garden", "学校花园"), src: "./assets/jamie-scenes/jamie-school-garden.jpg" },
    { title: pair("Music room", "音乐教室"), src: "./assets/jamie-scenes/jamie-music-room.jpg" },
    { title: pair("Aquarium gallery", "水族馆"), src: "./assets/jamie-scenes/jamie-aquarium-gallery.jpg" },
    { title: pair("Train station", "火车站"), src: "./assets/jamie-scenes/jamie-train-station.jpg" },
    { title: pair("Desert art tent", "沙漠画画帐篷"), src: "./assets/jamie-scenes/jamie-desert-art-tent.jpg" },
    { title: pair("Mountain meadow art", "山地草甸画画"), src: "./assets/jamie-scenes/jamie-mountain-meadow-art.jpg" }
  ];

  const avatarRotationModes = {
    daily: pair("Daily", "每天"),
    "half-hour": pair("Every 30 min", "每30分钟"),
    preview: pair("Fast preview", "快速预览")
  };

  const elements = {
    datePicker: document.querySelector("#datePicker"),
    todayButton: document.querySelector("#todayButton"),
    dayRail: document.querySelector("#dayRail"),
    weekBadge: document.querySelector("#weekBadge"),
    selectedDateLabel: document.querySelector("#selectedDateLabel"),
    dayTitle: document.querySelector("#dayTitle"),
    dayFocus: document.querySelector("#dayFocus"),
    progressRing: document.querySelector("#progressRing"),
    progressText: document.querySelector("#progressText"),
    completedCount: document.querySelector("#completedCount"),
    taskList: document.querySelector("#taskList"),
    template: document.querySelector("#taskTemplate"),
    toggleSheet: document.querySelector("#toggleSheet"),
    visualSheet: document.querySelector("#visualSheet"),
    markAllDone: document.querySelector("#markAllDone"),
    exportJson: document.querySelector("#exportJson"),
    exportCsv: document.querySelector("#exportCsv"),
    importJson: document.querySelector("#importJson"),
    clearDay: document.querySelector("#clearDay"),
    saveState: document.querySelector("#saveState"),
    syncBadge: document.querySelector("#syncBadge"),
    syncState: document.querySelector("#syncState"),
    syncEnabled: document.querySelector("#syncEnabled"),
    githubOwner: document.querySelector("#githubOwner"),
    githubRepo: document.querySelector("#githubRepo"),
    githubBranch: document.querySelector("#githubBranch"),
    githubPath: document.querySelector("#githubPath"),
    githubToken: document.querySelector("#githubToken"),
    useCurrentRepo: document.querySelector("#useCurrentRepo"),
    saveSyncSettings: document.querySelector("#saveSyncSettings"),
    syncNow: document.querySelector("#syncNow"),
    pullNow: document.querySelector("#pullNow"),
    jamieAvatar: document.querySelector("#jamieAvatar"),
    avatarCaption: document.querySelector("#avatarCaption"),
    avatarFrequency: document.querySelector("#avatarFrequency"),
    avatarUpload: document.querySelector("#avatarUpload"),
    avatarNext: document.querySelector("#avatarNext"),
    avatarReset: document.querySelector("#avatarReset")
  };

  const dailyInputs = Array.from(document.querySelectorAll("[data-daily]"));
  let records = loadRecords();
  let syncConfig = loadSyncConfig();
  let selectedDate = getInitialDate();
  let syncTimer = null;
  let pollTimer = null;
  let avatarTimer = null;
  let avatarIndex = 0;
  let applyingRemote = false;

  initialise();

  function initialise() {
    elements.datePicker.value = selectedDate;
    fillSyncInputs();
    loadAvatar();
    renderDayRail();
    renderSelectedDay();
    attachGlobalEvents();
    updateSyncBadge();
    startSyncPolling();
    if (syncConfig.enabled && syncConfig.token) {
      syncPullNow({ silent: true });
    }
  }

  function attachGlobalEvents() {
    elements.datePicker.addEventListener("change", () => {
      selectedDate = closestPlanDate(elements.datePicker.value);
      elements.datePicker.value = selectedDate;
      renderSelectedDay();
    });

    elements.todayButton.addEventListener("click", () => {
      selectedDate = getInitialDate();
      elements.datePicker.value = selectedDate;
      renderSelectedDay();
    });

    dailyInputs.forEach((input) => {
      input.addEventListener("input", () => {
        const record = ensureDayRecord(selectedDate);
        activateRecord(record);
        const field = input.dataset.daily;
        const now = new Date().toISOString();
        record.daily[field] = input.value;
        record.dailyUpdatedAt[field] = now;
        touchAndSave(record);
        renderProgress();
        renderDayRail();
      });
    });

    elements.toggleSheet.addEventListener("click", () => {
      elements.visualSheet.hidden = !elements.visualSheet.hidden;
      elements.toggleSheet.textContent = elements.visualSheet.hidden ? "Show / 显示" : "Hide / 隐藏";
    });

    elements.markAllDone.addEventListener("click", () => {
      const plan = plans[selectedDate];
      const record = ensureDayRecord(selectedDate);
      activateRecord(record);
      const now = new Date().toISOString();
      plan.tasks.forEach((task) => {
        record.tasks[task.id] = {
          ...record.tasks[task.id],
          status: "done",
          minutesDone: record.tasks[task.id]?.minutesDone || String(task.minutes),
          fieldUpdatedAt: {
            ...record.tasks[task.id]?.fieldUpdatedAt,
            status: now,
            minutesDone: now
          },
          updatedAt: now
        };
      });
      touchAndSave(record);
      renderSelectedDay();
    });

    elements.clearDay.addEventListener("click", () => {
      const label = formatDate(selectedDate);
      if (!window.confirm(`Clear records for ${label.en} / 清空 ${label.zh} 的记录？`)) {
        return;
      }
      const now = new Date().toISOString();
      records[selectedDate] = {
        daily: {},
        dailyUpdatedAt: {},
        tasks: {},
        deletedAt: now,
        updatedAt: now
      };
      saveRecords();
      renderSelectedDay();
      setSaveState("Cleared / 已清空");
    });

    elements.exportJson.addEventListener("click", exportJson);
    elements.exportCsv.addEventListener("click", exportCsv);
    elements.importJson.addEventListener("change", importJson);

    elements.useCurrentRepo.addEventListener("click", () => {
      syncConfig = {
        ...syncConfig,
        owner: DEFAULT_SYNC_CONFIG.owner,
        repo: DEFAULT_SYNC_CONFIG.repo,
        branch: DEFAULT_SYNC_CONFIG.branch,
        path: DEFAULT_SYNC_CONFIG.path
      };
      fillSyncInputs();
      setSyncState("Current website repo filled. Paste a real token next. / 已填入当前网站仓库；下一步粘贴真实 token。");
    });

    elements.saveSyncSettings.addEventListener("click", () => {
      syncConfig = readSyncInputs();
      saveSyncConfig(syncConfig);
      fillSyncInputs();
      updateSyncBadge();
      startSyncPolling();
      setSyncState(syncConfig.enabled ? "Sync settings saved / 同步设置已保存" : "Sync saved but off / 设置已保存，同步未开启");
      if (syncConfig.enabled && syncConfig.token) {
        syncPullNow({ silent: true });
      }
    });

    elements.syncNow.addEventListener("click", () => syncPushNow());
    elements.pullNow.addEventListener("click", () => syncPullNow());
    elements.avatarFrequency.addEventListener("change", () => {
      window.localStorage.setItem(AVATAR_ROTATION_KEY, elements.avatarFrequency.value);
      window.localStorage.removeItem(AVATAR_MODE_KEY);
      renderPhotoScene();
      startAvatarRotation();
      setSaveState("Photo rotation updated / 照片轮换已更新");
    });
    elements.avatarUpload.addEventListener("change", storeLocalAvatar);
    elements.avatarNext.addEventListener("click", () => {
      window.localStorage.removeItem(AVATAR_MODE_KEY);
      bumpAvatarOffset();
      renderPhotoScene();
      startAvatarRotation();
    });
    elements.avatarReset.addEventListener("click", resetAvatar);

    window.addEventListener("focus", () => {
      if (syncConfig.enabled && syncConfig.token) {
        syncPullNow({ silent: true });
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && syncConfig.enabled && syncConfig.token) {
        syncPullNow({ silent: true });
      }
    });
  }

  function renderDayRail() {
    elements.dayRail.innerHTML = "";
    dateKeys.forEach((dateKey) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "day-button";
      button.textContent = String(Number(dateKey.slice(-2)));
      const plan = plans[dateKey];
      button.title = `${formatDate(dateKey).text}: ${plan.title.text}`;
      button.classList.toggle("active", dateKey === selectedDate);
      button.classList.toggle("done-day", isDayComplete(dateKey));
      button.addEventListener("click", () => {
        selectedDate = dateKey;
        elements.datePicker.value = selectedDate;
        renderSelectedDay();
      });
      elements.dayRail.append(button);
    });
  }

  function renderSelectedDay() {
    const plan = plans[selectedDate];
    const label = formatDate(selectedDate);

    elements.weekBadge.textContent = plan.week;
    elements.selectedDateLabel.textContent = label.text;
    elements.dayTitle.textContent = plan.title.text;
    elements.dayFocus.textContent = plan.focus.text;

    fillDailyInputs();
    renderTasks(plan);
    renderProgress();
    renderDayRail();
  }

  function renderTasks(plan) {
    elements.taskList.innerHTML = "";
    const dayRecord = ensureDayRecord(selectedDate);

    plan.tasks.forEach((task) => {
      const fragment = elements.template.content.cloneNode(true);
      const card = fragment.querySelector(".task-card");
      card.dataset.taskId = task.id;
      card.dataset.status = dayRecord.tasks[task.id]?.status || "not-started";

      const visual = fragment.querySelector(".task-visual");
      visual.style.setProperty("--visual-bg", task.color);
      visual.innerHTML = `<div class="task-icon" aria-hidden="true">${icons[task.icon] || icons.check}</div>`;

      fragment.querySelector(".domain-pill").textContent = task.domain;
      fragment.querySelector(".minutes-pill").textContent = `${task.minutes} min / 分钟`;
      fragment.querySelector("h3").textContent = task.title.text;
      fragment.querySelector(".task-goal").textContent = task.goal.text;
      fragment.querySelector(".method-box").textContent = methodFor(task).text;
      renderList(fragment.querySelector(".steps"), task.steps);
      renderList(fragment.querySelector(".materials"), task.materials);
      fragment.querySelector(".script-box").textContent = task.script.text;

      const savedTask = dayRecord.tasks[task.id] || {};
      fragment.querySelectorAll("[data-field]").forEach((control) => {
        const field = control.dataset.field;
        if (field === "status") {
          control.value = savedTask.status || "not-started";
        } else {
          control.value = savedTask[field] ?? "";
        }
        if (field === "minutesDone") {
          control.placeholder = String(task.minutes);
        }
      });

      card.addEventListener("input", (event) => updateTaskRecord(event, task.id));
      card.addEventListener("change", (event) => updateTaskRecord(event, task.id));
      elements.taskList.append(fragment);
    });
  }

  function renderList(listElement, items) {
    listElement.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.text;
      listElement.append(li);
    });
  }

  function fillDailyInputs() {
    const record = ensureDayRecord(selectedDate);
    dailyInputs.forEach((input) => {
      input.value = record.daily[input.dataset.daily] ?? "";
    });
  }

  function updateTaskRecord(event, taskId) {
    const control = event.target.closest("[data-field]");
    if (!control) return;

    const record = ensureDayRecord(selectedDate);
    activateRecord(record);
    const taskRecord = record.tasks[taskId] || {};
    const now = new Date().toISOString();
    const field = control.dataset.field;
    taskRecord[field] = control.value;
    taskRecord.fieldUpdatedAt = {
      ...taskRecord.fieldUpdatedAt,
      [field]: now
    };
    taskRecord.updatedAt = now;
    record.tasks[taskId] = taskRecord;

    const card = control.closest(".task-card");
    if (control.dataset.field === "status") {
      card.dataset.status = control.value;
    }

    touchAndSave(record);
    renderProgress();
    renderDayRail();
  }

  function renderProgress() {
    const plan = plans[selectedDate];
    const record = ensureDayRecord(selectedDate);
    const done = plan.tasks.filter((task) => record.tasks[task.id]?.status === "done").length;
    const total = plan.tasks.length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    elements.progressRing.style.setProperty("--progress", `${percent * 3.6}deg`);
    elements.progressText.textContent = `${percent}%`;
    elements.completedCount.textContent = `${done}/${total}`;
  }

  function ensureDayRecord(dateKey) {
    if (!records[dateKey]) {
      records[dateKey] = {
        daily: {},
        dailyUpdatedAt: {},
        tasks: {},
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    }
    if (!records[dateKey].daily) records[dateKey].daily = {};
    if (!records[dateKey].dailyUpdatedAt) records[dateKey].dailyUpdatedAt = {};
    if (!records[dateKey].tasks) records[dateKey].tasks = {};
    return records[dateKey];
  }

  function activateRecord(record) {
    if (record.deletedAt) {
      delete record.deletedAt;
    }
  }

  function touchAndSave(record) {
    record.updatedAt = new Date().toISOString();
    saveRecords();
  }

  function loadRecords() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed.records || parsed || {};
    } catch (error) {
      console.warn("Could not load Jamie training records", error);
      return {};
    }
  }

  function saveRecords(options = {}) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: 1,
      savedAt: new Date().toISOString(),
      records
    }));
    setSaveState(`Saved ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} / 已保存`);
    if (!options.skipSync && !applyingRemote) {
      scheduleSync("local change");
    }
  }

  function setSaveState(message) {
    elements.saveState.textContent = message;
  }

  function loadSyncConfig() {
    try {
      const raw = window.localStorage.getItem(SYNC_KEY);
      if (!raw) return { ...DEFAULT_SYNC_CONFIG };
      return normaliseSyncConfig(JSON.parse(raw));
    } catch (error) {
      console.warn("Could not load sync settings", error);
      return { ...DEFAULT_SYNC_CONFIG };
    }
  }

  function normaliseSyncConfig(config = {}) {
    return {
      enabled: Boolean(config.enabled),
      owner: nonEmpty(config.owner, DEFAULT_SYNC_CONFIG.owner),
      repo: nonEmpty(config.repo, DEFAULT_SYNC_CONFIG.repo),
      branch: nonEmpty(config.branch, DEFAULT_SYNC_CONFIG.branch),
      path: nonEmpty(config.path, DEFAULT_SYNC_CONFIG.path),
      token: String(config.token || "").trim()
    };
  }

  function nonEmpty(value, fallback) {
    const text = String(value || "").trim();
    return text || fallback;
  }

  function saveSyncConfig(config) {
    window.localStorage.setItem(SYNC_KEY, JSON.stringify(config));
  }

  function fillSyncInputs() {
    elements.githubOwner.value = syncConfig.owner || "";
    elements.githubRepo.value = syncConfig.repo || "";
    elements.githubBranch.value = syncConfig.branch || "main";
    elements.githubPath.value = syncConfig.path || "jamie-training-data/records.json";
    elements.githubToken.value = syncConfig.token || "";
    elements.syncEnabled.checked = Boolean(syncConfig.enabled);
  }

  function readSyncInputs() {
    return normaliseSyncConfig({
      enabled: elements.syncEnabled.checked,
      owner: elements.githubOwner.value.trim(),
      repo: elements.githubRepo.value.trim(),
      branch: elements.githubBranch.value.trim() || "main",
      path: elements.githubPath.value.trim() || "jamie-training-data/records.json",
      token: elements.githubToken.value.trim()
    });
  }

  function updateSyncBadge() {
    if (!syncConfig.enabled) {
      elements.syncBadge.textContent = "Off / 未开启";
      return;
    }
    if (!hasUsableToken(syncConfig.token)) {
      elements.syncBadge.textContent = "Needs token / 需 token";
      return;
    }
    elements.syncBadge.textContent = "On / 已开启";
  }

  function setSyncState(message) {
    elements.syncState.textContent = message;
  }

  function scheduleSync() {
    if (!syncConfig.enabled || !hasUsableToken(syncConfig.token)) return;
    window.clearTimeout(syncTimer);
    setSyncState("Waiting to sync / 等待同步...");
    syncTimer = window.setTimeout(() => syncPushNow({ silent: true }), SYNC_DEBOUNCE_MS);
  }

  function startSyncPolling() {
    window.clearInterval(pollTimer);
    if (!syncConfig.enabled || !hasUsableToken(syncConfig.token)) return;
    pollTimer = window.setInterval(() => {
      if (!document.hidden) {
        syncPullNow({ silent: true });
      }
    }, SYNC_POLL_MS);
  }

  async function syncPullNow(options = {}) {
    if (!hasSyncConfig()) return;
    try {
      if (!options.silent) setSyncState("Pulling from GitHub / 正在从 GitHub 拉取...");
      const remote = await fetchRemoteRecords();
      const merged = mergeRecordSets(records, remote.records);
      if (merged.changed) {
        applyingRemote = true;
        records = merged.records;
        saveRecords({ skipSync: true });
        applyingRemote = false;
        renderSelectedDay();
      }
      setSyncState(`Pulled ${formatClock()} / 已拉取`);
    } catch (error) {
      applyingRemote = false;
      setSyncState(`Pull failed / 拉取失败: ${error.message}`);
    }
  }

  async function syncPushNow(options = {}) {
    if (!hasSyncConfig()) return;
    window.clearTimeout(syncTimer);
    try {
      if (!options.silent) setSyncState("Syncing to GitHub / 正在同步到 GitHub...");
      let remote = await fetchRemoteRecords();
      let merged = mergeRecordSets(records, remote.records);
      let payload = makeRemotePayload(merged.records);
      try {
        await putRemoteRecords(payload, remote.sha);
      } catch (error) {
        if (!/409|conflict/i.test(error.message)) throw error;
        remote = await fetchRemoteRecords();
        merged = mergeRecordSets(merged.records, remote.records);
        payload = makeRemotePayload(merged.records);
        await putRemoteRecords(payload, remote.sha);
      }
      applyingRemote = true;
      records = merged.records;
      saveRecords({ skipSync: true });
      applyingRemote = false;
      renderSelectedDay();
      setSyncState(`Synced ${formatClock()} / 已同步`);
    } catch (error) {
      applyingRemote = false;
      setSyncState(`Sync failed / 同步失败: ${error.message}`);
    }
  }

  function hasSyncConfig() {
    syncConfig = readSyncInputs();
    fillSyncInputs();
    saveSyncConfig(syncConfig);
    updateSyncBadge();
    if (!syncConfig.enabled) {
      setSyncState("Auto sync is off / 自动同步未开启");
      return false;
    }
    const missing = [];
    if (!syncConfig.owner) missing.push("owner / 用户");
    if (!syncConfig.repo) missing.push("repo / 仓库");
    if (!syncConfig.branch) missing.push("branch / 分支");
    if (!syncConfig.path) missing.push("path / 路径");
    if (!hasUsableToken(syncConfig.token)) missing.push("real token / 真实 token");
    if (missing.length) {
      setSyncState(`Missing: ${missing.join(", ")}. Token should start like github_pat_... / 缺少：${missing.join("，")}。token 通常以 github_pat_ 开头。`);
      return false;
    }
    return true;
  }

  function hasUsableToken(token) {
    const value = String(token || "").trim();
    if (value.length < 20) return false;
    if (/fine-grained token/i.test(value)) return false;
    if (/contents read\/write/i.test(value)) return false;
    if (/paste actual token/i.test(value)) return false;
    return true;
  }

  async function fetchRemoteRecords() {
    const url = githubContentsUrl();
    const response = await fetch(url, { headers: githubHeaders() });
    if (response.status === 404) {
      return { records: {}, sha: null };
    }
    if (!response.ok) {
      throw new Error(`GitHub GET ${response.status}`);
    }
    const data = await response.json();
    const content = data.content ? decodeBase64(data.content.replace(/\s/g, "")) : "{}";
    const payload = JSON.parse(content || "{}");
    return {
      records: payload.records || payload || {},
      sha: data.sha || null
    };
  }

  async function putRemoteRecords(payload, sha) {
    const body = {
      message: `Update Jamie training records ${new Date().toISOString().slice(0, 10)}`,
      content: encodeBase64(JSON.stringify(payload, null, 2)),
      branch: syncConfig.branch
    };
    if (sha) body.sha = sha;

    const response = await fetch(githubContentsUrl(false), {
      method: "PUT",
      headers: githubHeaders(),
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`GitHub PUT ${response.status}: ${text.slice(0, 180)}`);
    }
  }

  function githubContentsUrl(includeRef = true) {
    const safePath = syncConfig.path.split("/").map(encodeURIComponent).join("/");
    const base = `https://api.github.com/repos/${encodeURIComponent(syncConfig.owner)}/${encodeURIComponent(syncConfig.repo)}/contents/${safePath}`;
    return includeRef ? `${base}?ref=${encodeURIComponent(syncConfig.branch)}` : base;
  }

  function githubHeaders() {
    return {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${syncConfig.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json"
    };
  }

  function makeRemotePayload(nextRecords) {
    return {
      version: 2,
      updatedAt: new Date().toISOString(),
      app: "Jamie Daily Practice",
      mergePolicy: "field-level latest-updatedAt wins",
      records: nextRecords
    };
  }

  function mergeRecordSets(localRecords, remoteRecords) {
    const merged = clone(localRecords);
    let changed = false;
    const dates = new Set([...Object.keys(localRecords || {}), ...Object.keys(remoteRecords || {})]);
    dates.forEach((dateKey) => {
      const before = JSON.stringify(merged[dateKey] || null);
      merged[dateKey] = mergeDayRecord(localRecords?.[dateKey], remoteRecords?.[dateKey]);
      if (JSON.stringify(merged[dateKey] || null) !== before) {
        changed = true;
      }
    });
    return { records: merged, changed };
  }

  function mergeDayRecord(localDay, remoteDay) {
    if (!localDay) return clone(remoteDay);
    if (!remoteDay) return clone(localDay);

    const localDeleteWins = localDay.deletedAt && laterThan(localDay.deletedAt, remoteDay.updatedAt);
    const remoteDeleteWins = remoteDay.deletedAt && laterThan(remoteDay.deletedAt, localDay.updatedAt);
    if (localDeleteWins && !remoteDeleteWins) return clone(localDay);
    if (remoteDeleteWins && !localDeleteWins) return clone(remoteDay);

    const merged = {
      ...clone(localDay),
      ...clone(remoteDay),
      createdAt: minDate(localDay.createdAt, remoteDay.createdAt) || localDay.createdAt || remoteDay.createdAt,
      updatedAt: maxDate(localDay.updatedAt, remoteDay.updatedAt) || new Date().toISOString(),
      daily: {},
      dailyUpdatedAt: {},
      tasks: {}
    };
    delete merged.deletedAt;

    const dailyFields = new Set([
      ...Object.keys(localDay.daily || {}),
      ...Object.keys(remoteDay.daily || {})
    ]);
    dailyFields.forEach((field) => {
      const localTime = localDay.dailyUpdatedAt?.[field] || localDay.updatedAt || "";
      const remoteTime = remoteDay.dailyUpdatedAt?.[field] || remoteDay.updatedAt || "";
      const useRemote = laterThan(remoteTime, localTime);
      merged.daily[field] = useRemote ? remoteDay.daily?.[field] : localDay.daily?.[field];
      merged.dailyUpdatedAt[field] = useRemote ? remoteTime : localTime;
    });

    const taskIds = new Set([
      ...Object.keys(localDay.tasks || {}),
      ...Object.keys(remoteDay.tasks || {})
    ]);
    taskIds.forEach((taskId) => {
      merged.tasks[taskId] = mergeTaskRecord(localDay.tasks?.[taskId], remoteDay.tasks?.[taskId], localDay.updatedAt, remoteDay.updatedAt);
    });

    return merged;
  }

  function mergeTaskRecord(localTask, remoteTask, localDayTime, remoteDayTime) {
    if (!localTask) return clone(remoteTask);
    if (!remoteTask) return clone(localTask);

    const fields = new Set([
      ...Object.keys(localTask || {}),
      ...Object.keys(remoteTask || {})
    ]);
    fields.delete("updatedAt");
    fields.delete("fieldUpdatedAt");

    const merged = {
      fieldUpdatedAt: {},
      updatedAt: maxDate(localTask.updatedAt, remoteTask.updatedAt) || localTask.updatedAt || remoteTask.updatedAt || ""
    };

    fields.forEach((field) => {
      const localTime = localTask.fieldUpdatedAt?.[field] || localTask.updatedAt || localDayTime || "";
      const remoteTime = remoteTask.fieldUpdatedAt?.[field] || remoteTask.updatedAt || remoteDayTime || "";
      const useRemote = laterThan(remoteTime, localTime);
      merged[field] = useRemote ? remoteTask[field] : localTask[field];
      merged.fieldUpdatedAt[field] = useRemote ? remoteTime : localTime;
    });

    return merged;
  }

  function laterThan(a, b) {
    if (!a) return false;
    if (!b) return true;
    return new Date(a).getTime() > new Date(b).getTime();
  }

  function maxDate(a, b) {
    if (!a) return b;
    if (!b) return a;
    return laterThan(a, b) ? a : b;
  }

  function minDate(a, b) {
    if (!a) return b;
    if (!b) return a;
    return laterThan(a, b) ? b : a;
  }

  function clone(value) {
    return value == null ? value : JSON.parse(JSON.stringify(value));
  }

  function encodeBase64(text) {
    const bytes = new TextEncoder().encode(text);
    let binary = "";
    bytes.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }

  function decodeBase64(base64) {
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function formatClock() {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  function loadAvatar() {
    elements.avatarFrequency.value = getAvatarRotationMode();
    const saved = window.localStorage.getItem(AVATAR_KEY);
    if (saved && window.localStorage.getItem(AVATAR_MODE_KEY) === "local") {
      stopAvatarRotation();
      elements.jamieAvatar.src = saved;
      elements.avatarCaption.textContent = "Local photo / 本机照片";
      return;
    }
    renderPhotoScene();
    startAvatarRotation();
  }

  function storeLocalAvatar(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSide = 900;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.84);
        try {
          window.localStorage.setItem(AVATAR_KEY, dataUrl);
          window.localStorage.setItem(AVATAR_MODE_KEY, "local");
          stopAvatarRotation();
          elements.jamieAvatar.src = dataUrl;
          elements.avatarCaption.textContent = "Local photo / 本机照片";
          setSaveState("Avatar saved locally / 头像已本机保存");
        } catch (error) {
          window.alert("Photo is too large for this browser. / 照片太大，浏览器无法保存。");
        }
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  }

  function resetAvatar() {
    window.localStorage.removeItem(AVATAR_KEY);
    window.localStorage.removeItem(AVATAR_MODE_KEY);
    window.localStorage.removeItem(AVATAR_OFFSET_KEY);
    renderPhotoScene();
    startAvatarRotation();
    setSaveState("Photo gallery reset / 照片图库已还原");
  }

  function startAvatarRotation() {
    stopAvatarRotation();
    avatarTimer = window.setInterval(
      renderPhotoScene,
      getAvatarRotationMode() === "preview" ? AVATAR_PREVIEW_MS : AVATAR_CLOCK_CHECK_MS
    );
  }

  function stopAvatarRotation() {
    window.clearInterval(avatarTimer);
    avatarTimer = null;
  }

  function bumpAvatarOffset() {
    const nextOffset = getAvatarOffset() + 1;
    window.localStorage.setItem(AVATAR_OFFSET_KEY, String(nextOffset));
  }

  function renderPhotoScene() {
    avatarIndex = getAvatarSceneIndex();
    const scene = photoScenes[avatarIndex];
    const mode = avatarRotationModes[getAvatarRotationMode()] || avatarRotationModes.daily;
    elements.jamieAvatar.src = scene.src;
    elements.jamieAvatar.alt = `Jamie - ${scene.title.text}`;
    elements.avatarCaption.textContent = `${scene.title.text} · ${mode.text}`;
    preloadPhotoScenes(avatarIndex);
  }

  function preloadPhotoScenes(currentIndex) {
    [1, 2].forEach((step) => {
      const scene = photoScenes[modulo(currentIndex + step, photoScenes.length)];
      const image = new Image();
      image.src = scene.src;
    });
  }

  function getAvatarSceneIndex() {
    const mode = getAvatarRotationMode();
    const now = Date.now();
    const base = mode === "half-hour"
      ? Math.floor(now / (30 * 60 * 1000))
      : mode === "preview"
        ? Math.floor(now / AVATAR_PREVIEW_MS)
        : getLocalDayIndex();
    return modulo(base + getAvatarOffset(), photoScenes.length);
  }

  function getLocalDayIndex() {
    const now = new Date();
    return Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / (24 * 60 * 60 * 1000));
  }

  function getAvatarRotationMode() {
    const saved = window.localStorage.getItem(AVATAR_ROTATION_KEY);
    return Object.prototype.hasOwnProperty.call(avatarRotationModes, saved) ? saved : "daily";
  }

  function getAvatarOffset() {
    return Number.parseInt(window.localStorage.getItem(AVATAR_OFFSET_KEY) || "0", 10) || 0;
  }

  function modulo(value, divisor) {
    return ((value % divisor) + divisor) % divisor;
  }

  function svgToDataUri(markup) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
  }

  function cartoonAvatarSvg(scene) {
    return `<svg width="720" height="720" viewBox="0 0 720 720" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="720" height="720" rx="72" fill="${scene.bg}"/>
      <circle cx="118" cy="118" r="38" fill="#fff" opacity=".75"/>
      <circle cx="615" cy="142" r="54" fill="#fff" opacity=".6"/>
      <path d="M84 594C139 496 251 438 360 438C469 438 581 496 636 594V650H84V594Z" fill="#ddefe5" stroke="#173047" stroke-width="10"/>
      <path d="M276 628C282 547 315 492 360 492C405 492 438 547 444 628H276Z" fill="#0f6d4d" stroke="#173047" stroke-width="12" stroke-linejoin="round"/>
      <path d="M296 548C330 569 390 569 424 548" stroke="#fff" stroke-width="15" stroke-linecap="round"/>
      <path d="M299 628C306 586 325 558 348 542M421 628C414 586 395 558 372 542" stroke="#fff" stroke-width="10" stroke-linecap="round"/>
      <path d="M342 457C334 480 325 498 310 509C329 526 391 526 410 509C395 498 386 480 378 457H342Z" fill="#f2be9d" stroke="#173047" stroke-width="10" stroke-linejoin="round"/>
      <circle cx="360" cy="326" r="112" fill="#f2be9d" stroke="#173047" stroke-width="12"/>
      <path d="M255 304C260 222 300 170 365 170C430 170 470 222 474 304C445 269 405 257 360 263C315 269 284 279 255 304Z" fill="#17202a" stroke="#173047" stroke-width="12" stroke-linejoin="round"/>
      <path d="M295 246C316 213 348 195 395 195" stroke="#343b45" stroke-width="14" stroke-linecap="round"/>
      <circle cx="320" cy="332" r="9" fill="#173047"/>
      <circle cx="400" cy="332" r="9" fill="#173047"/>
      <path d="M337 379C352 390 370 390 385 379" stroke="#173047" stroke-width="9" stroke-linecap="round"/>
      <path d="M322 419C346 438 374 438 398 419" stroke="#173047" stroke-width="10" stroke-linecap="round"/>
      <path d="M278 557C238 538 222 501 238 472C250 451 277 457 304 485" fill="#f2be9d"/>
      <path d="M442 557C482 538 498 501 482 472C470 451 443 457 416 485" fill="#f2be9d"/>
      <path d="M278 557C238 538 222 501 238 472C250 451 277 457 304 485M442 557C482 538 498 501 482 472C470 451 443 457 416 485" stroke="#173047" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
      ${cartoonPropSvg(scene.prop, scene.accent)}
      <path d="M132 641H588" stroke="#173047" stroke-width="12" stroke-linecap="round"/>
    </svg>`;
  }

  function cartoonPropSvg(prop, accent) {
    const palette = {
      accent,
      ink: "#173047",
      sun: "#f7c95f",
      sky: "#76aee8",
      leaf: "#74b88a",
      coral: "#ee8d78",
      white: "#fff"
    };
    const props = {
      paint: `<rect x="85" y="166" width="164" height="280" rx="18" fill="${palette.white}" stroke="${palette.ink}" stroke-width="10"/><path d="M112 240C146 214 170 251 201 226" stroke="${palette.leaf}" stroke-width="18" stroke-linecap="round"/><circle cx="138" cy="309" r="24" fill="${palette.sky}" stroke="${palette.ink}" stroke-width="7"/><circle cx="194" cy="344" r="20" fill="${palette.coral}" stroke="${palette.ink}" stroke-width="7"/><path d="M467 494L548 386" stroke="#815f3c" stroke-width="13" stroke-linecap="round"/><circle cx="556" cy="376" r="18" fill="${accent}" stroke="${palette.ink}" stroke-width="7"/>`,
      bag: `<path d="M500 182h94l18 158H482z" fill="${accent}" stroke="${palette.ink}" stroke-width="10" stroke-linejoin="round"/><path d="M520 182c0-42 54-42 54 0" stroke="${palette.ink}" stroke-width="10" stroke-linecap="round"/><path d="M515 245h66" stroke="${palette.white}" stroke-width="11" stroke-linecap="round"/><path d="M470 496L546 376" stroke="${palette.ink}" stroke-width="10" stroke-linecap="round"/>`,
      bubbles: `<circle cx="520" cy="215" r="42" fill="#d9f7ff" stroke="${palette.ink}" stroke-width="8"/><circle cx="604" cy="286" r="34" fill="#effcff" stroke="${palette.ink}" stroke-width="8"/><circle cx="512" cy="350" r="28" fill="${palette.white}" stroke="${palette.ink}" stroke-width="8"/><path d="M462 492L524 374" stroke="${palette.ink}" stroke-width="10" stroke-linecap="round"/>`,
      book: `<path d="M86 452h182c22 0 36 14 36 36v100H122c-22 0-36-14-36-36z" fill="${palette.white}" stroke="${palette.ink}" stroke-width="10"/><path d="M304 488c0-22 14-36 36-36h182v100c0 22-14 36-36 36H304z" fill="#eaf7ff" stroke="${palette.ink}" stroke-width="10"/><path d="M144 500h90M372 500h90M144 540h74M372 540h74" stroke="${palette.ink}" stroke-width="8" stroke-linecap="round"/>`,
      blocks: `<rect x="88" y="470" width="72" height="72" rx="10" fill="${palette.sun}" stroke="${palette.ink}" stroke-width="9"/><rect x="170" y="430" width="72" height="112" rx="10" fill="${accent}" stroke="${palette.ink}" stroke-width="9"/><rect x="252" y="498" width="72" height="44" rx="10" fill="${palette.sky}" stroke="${palette.ink}" stroke-width="9"/><path d="M454 500L518 458L582 500V560H454z" fill="${palette.white}" stroke="${palette.ink}" stroke-width="9" stroke-linejoin="round"/>`,
      numbers: `<rect x="86" y="170" width="96" height="128" rx="16" fill="${palette.white}" stroke="${palette.ink}" stroke-width="10"/><rect x="536" y="182" width="96" height="128" rx="16" fill="${palette.white}" stroke="${palette.ink}" stroke-width="10"/><text x="134" y="254" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="900" fill="${palette.ink}">3</text><text x="584" y="266" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="900" fill="${palette.ink}">8</text><path d="M472 492C508 466 538 444 568 404" stroke="${accent}" stroke-width="14" stroke-linecap="round"/>`,
      stop: `<circle cx="548" cy="246" r="86" fill="${palette.sun}" stroke="${palette.ink}" stroke-width="10"/><path d="M506 247h84" stroke="${palette.ink}" stroke-width="15" stroke-linecap="round"/><path d="M451 482C488 438 514 403 536 340" stroke="${palette.ink}" stroke-width="10" stroke-linecap="round"/><path d="M210 188h-62l-31 54 31 54h62l31-54z" fill="${accent}" stroke="${palette.ink}" stroke-width="9"/><path d="M146 242h64" stroke="${palette.white}" stroke-width="12" stroke-linecap="round"/>`,
      music: `<path d="M555 170v138a40 40 0 1 1-24-36v-74l-96 22v112a40 40 0 1 1-24-36V204z" fill="${accent}" stroke="${palette.ink}" stroke-width="10" stroke-linejoin="round"/><path d="M452 492C486 456 512 410 526 352" stroke="${palette.ink}" stroke-width="10" stroke-linecap="round"/>`,
      flower: `<circle cx="536" cy="218" r="20" fill="${palette.sun}" stroke="${palette.ink}" stroke-width="7"/><circle cx="536" cy="176" r="27" fill="${accent}" stroke="${palette.ink}" stroke-width="7"/><circle cx="536" cy="260" r="27" fill="${palette.sky}" stroke="${palette.ink}" stroke-width="7"/><circle cx="494" cy="218" r="27" fill="${palette.leaf}" stroke="${palette.ink}" stroke-width="7"/><circle cx="578" cy="218" r="27" fill="${palette.coral}" stroke="${palette.ink}" stroke-width="7"/><path d="M532 290C518 374 494 438 454 500" stroke="${palette.leaf}" stroke-width="13" stroke-linecap="round"/>`,
      puzzle: `<path d="M478 174h58a28 28 0 1 1 40 0h58v64a28 28 0 1 0 0 40v64h-64a28 28 0 1 1-40 0h-52z" fill="${accent}" stroke="${palette.ink}" stroke-width="10" stroke-linejoin="round"/><path d="M450 496L523 367" stroke="${palette.ink}" stroke-width="10" stroke-linecap="round"/>`
    };
    return props[prop] || props.paint;
  }

  function methodFor(task) {
    if (task.domain.startsWith("Safety")) {
      return pair("Method: visual boundary + one consistent cue + immediate reinforcement; practise calmly before real risk settings.", "方法：视觉边界 + 单一一致提示 + 即时强化；先在低风险情境练，再泛化到真实安全场景。");
    }
    if (task.domain.startsWith("Regulation")) {
      return pair("Method: regulate before teaching; use predictable visuals, low language, and a clear return routine.", "方法：先调节再教学；使用可预测视觉、减少语言，并设置清晰返回 routine。");
    }
    if (task.domain.startsWith("Communication")) {
      return pair("Method: NDBI communication temptation; pause, wait, accept any clear attempt, model one step higher, then give the natural result.", "方法：NDBI 沟通机会；暂停等待，接受任何清晰尝试，示范高一阶语言，然后给自然结果。");
    }
    if (task.domain.startsWith("Prep")) {
      return pair("Method: concrete play-based Foundation/Prep learning; model first, support success, then fade prompts.", "方法：具体、游戏化的 Foundation/Prep 学习；先示范，辅助成功，再逐步撤销辅助。");
    }
    return pair("Method: task analysis; teach one small step, use least-to-most prompting, reinforce effort, and fade support.", "方法：任务分析；一次教一个小步骤，由少到多辅助，强化尝试，并逐步撤销辅助。");
  }

  function exportJson() {
    downloadFile(`jamie-training-records-${selectedDate}.json`, "application/json", JSON.stringify({
      version: 1,
      exportedAt: new Date().toISOString(),
      planRange: `${START_DATE} to ${END_DATE}`,
      records
    }, null, 2));
  }

  function exportCsv() {
    const headers = [
      "date",
      "week",
      "day_title_en",
      "day_title_zh",
      "task_id",
      "task_domain",
      "task_title_en",
      "task_title_zh",
      "status",
      "support",
      "minutes_done",
      "successes",
      "opportunities",
      "task_notes",
      "stop_success",
      "stop_chances",
      "initiations",
      "core_models",
      "longest_table_minutes",
      "drink_times",
      "toilet_routines",
      "best_reinforcer",
      "risk_notes",
      "updated_at"
    ];

    const rows = [headers];
    dateKeys.forEach((dateKey) => {
      const plan = plans[dateKey];
      const record = records[dateKey] || { daily: {}, tasks: {} };
      plan.tasks.forEach((task) => {
        const taskRecord = record.tasks?.[task.id] || {};
        rows.push([
          dateKey,
          plan.week,
          plan.title.en,
          plan.title.zh,
          task.id,
          task.domain,
          task.title.en,
          task.title.zh,
          taskRecord.status || "not-started",
          taskRecord.support || "",
          taskRecord.minutesDone || "",
          taskRecord.successes || "",
          taskRecord.opportunities || "",
          taskRecord.notes || "",
          record.daily?.stopSuccess || "",
          record.daily?.stopChances || "",
          record.daily?.initiations || "",
          record.daily?.coreModels || "",
          record.daily?.tableMinutes || "",
          record.daily?.drinkTimes || "",
          record.daily?.toiletTimes || "",
          record.daily?.reinforcer || "",
          record.daily?.riskNotes || "",
          taskRecord.updatedAt || record.updatedAt || ""
        ]);
      });
    });

    const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
    downloadFile(`jamie-training-records-${selectedDate}.csv`, "text/csv;charset=utf-8", csv);
  }

  function importJson(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const incoming = parsed.records || parsed;
        if (!incoming || typeof incoming !== "object" || Array.isArray(incoming)) {
          throw new Error("JSON does not contain a records object.");
        }
        const incomingCount = Object.keys(incoming).length;
        if (!window.confirm(`Import ${incomingCount} day records? Existing same-day records will be replaced. / 导入 ${incomingCount} 天记录？同日期记录会被替换。`)) {
          return;
        }
        records = { ...records, ...incoming };
        saveRecords();
        renderSelectedDay();
      } catch (error) {
        window.alert(`Import failed / 导入失败: ${error.message}`);
      } finally {
        event.target.value = "";
      }
    };
    reader.readAsText(file);
  }

  function downloadFile(filename, type, content) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function csvCell(value) {
    const stringValue = String(value ?? "");
    if (/[",\n]/.test(stringValue)) {
      return `"${stringValue.replaceAll('"', '""')}"`;
    }
    return stringValue;
  }

  function isDayComplete(dateKey) {
    const plan = plans[dateKey];
    const record = records[dateKey];
    if (!plan || !record) return false;
    return plan.tasks.every((task) => record.tasks?.[task.id]?.status === "done");
  }

  function getInitialDate() {
    const today = new Date();
    const local = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    return closestPlanDate(local);
  }

  function closestPlanDate(dateKey) {
    if (plans[dateKey]) return dateKey;
    if (dateKey < START_DATE) return START_DATE;
    if (dateKey > END_DATE) return END_DATE;
    return dateKeys.find((key) => key >= dateKey) || END_DATE;
  }

  function formatDate(dateKey) {
    const date = new Date(`${dateKey}T00:00:00`);
    const en = new Intl.DateTimeFormat("en-AU", {
      weekday: "long",
      month: "short",
      day: "numeric"
    }).format(date);
    const zh = new Intl.DateTimeFormat("zh-CN", {
      weekday: "long",
      month: "long",
      day: "numeric"
    }).format(date);
    return { en, zh, text: `${en} / ${zh}` };
  }

  function activity(config) {
    return config;
  }

  function day(date, week, title, focus, taskKeys) {
    return {
      date,
      week,
      title,
      focus,
      tasks: taskKeys.map((key) => {
        const source = activityLibrary[key];
        return {
          ...source,
          id: `${date}-${key}`
        };
      })
    };
  }

  function svg(inner) {
    return `<svg viewBox="0 0 120 120" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  }
})();
