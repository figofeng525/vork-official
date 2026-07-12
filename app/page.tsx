const stations = [
  ["1K Run", "开场配速"],
  ["Ski", "上肢耐力"],
  ["Sled Push", "爆发推进"],
  ["Sled Pull", "背链牵引"],
  ["Burpee Broad Jump", "全身协调"],
  ["Row", "心肺输出"],
  ["Farmer Carry", "握力负重"],
  ["Sandbag Lunges", "下肢稳定"],
  ["Wall Balls", "终点冲刺"],
];

const cities = [
  { city: "Shanghai", date: "09.20", venue: "West Bund Dome", status: "报名开放" },
  { city: "Shenzhen", date: "10.18", venue: "Bay Sports Park", status: "早鸟阶段" },
  { city: "Chengdu", date: "11.15", venue: "Phoenix Mountain Hall", status: "即将开启" },
];

const divisions = ["Open Singles", "Open Doubles", "Pro Singles", "Corporate Relay"];

const tickets = [
  { name: "Open Entry", price: "¥399", detail: "个人或双人组标准参赛名额，含计时芯片、赛事包与完赛奖牌。" },
  { name: "Pro Wave", price: "¥559", detail: "精英组排位出发，适合有训练周期和冲榜目标的运动员。" },
  { name: "Team Relay", price: "¥1,199", detail: "四人团队接力名额，适合企业、训练馆和运动社群。" },
];

const faqs = [
  ["VORK 适合新手吗？", "适合。Open 组保留标准化赛道，但重量、节奏和出发波次更友好。"],
  ["需要先完成资格赛吗？", "Open 组无需资格赛；Pro 组建议提交近 12 个月赛事或训练成绩。"],
  ["训练馆可以合作吗？", "可以。VORK Partner Gym 计划提供训练模板、认证教练课和城市站社群名额。"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="VORK home"><span className="brand-mark">V</span><span>VORK</span></a>
          <div className="nav-links"><a href="#race">赛制</a><a href="#cities">城市站</a><a href="#train">训练</a><a href="#register">报名</a></div>
          <a className="nav-cta" href="#register">锁定席位</a>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">China Functional Fitness Race Series</p>
            <h1>VORK</h1>
            <p className="hero-kicker">跑起来。推过去。扛到终点。</p>
            <p className="hero-text">一个为城市运动员打造的标准化功能体能赛事：9 段跑步连接 8 个训练站，公开组、精英组、双人组与企业接力同场开赛。</p>
            <div className="hero-actions"><a className="button primary" href="#register">立即报名</a><a className="button secondary" href="#race">查看赛制</a></div>
          </div>
          <div className="scoreboard" aria-label="VORK race snapshot">
            <div className="timer-row"><span>Next Wave</span><strong>08:30</strong></div>
            <div className="lane"><span>Station 04</span><b>Sled Pull</b></div>
            <div className="metrics"><div><span>Distance</span><strong>9 KM</strong></div><div><span>Stations</span><strong>8+1</strong></div><div><span>Ranking</span><strong>Live</strong></div></div>
            <div className="track-lines" aria-hidden="true"><span /><span /><span /><span /></div>
          </div>
        </div>
      </section>
      <section className="marquee" aria-label="VORK values"><span>RUN</span><span>PUSH</span><span>PULL</span><span>CARRY</span><span>FINISH</span><span>REPEAT</span></section>
      <section className="section race" id="race">
        <div className="section-heading"><div><p className="eyebrow">Race Format</p><h2>像训练一样清楚，像比赛一样残酷。</h2></div><p>每位选手完成固定赛道，所有城市使用统一站点、统一计时、统一排名。你的成绩可以跨城市比较，也能进入年度榜单。</p></div>
        <div className="station-grid">{stations.map(([title, label], index) => <article className="station" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{label}</p></article>)}</div>
      </section>
      <section className="section split" id="cities">
        <div><p className="eyebrow">2026 City Series</p><h2>第一赛季，从三座城市开跑。</h2><p>VORK 城市站把赛事、训练馆、品牌展区和观众看台放在同一个周末。选手冲线，社群见面，成绩当场上榜。</p></div>
        <div className="city-list">{cities.map((event) => <article className="city" key={event.city}><div><span>{event.date}</span><h3>{event.city}</h3><p>{event.venue}</p></div><strong>{event.status}</strong></article>)}</div>
      </section>
      <section className="section train" id="train">
        <div className="training-panel"><p className="eyebrow">VORK Training</p><h2>赛前 8 周，把训练变成路线图。</h2><p>Partner Gym、认证教练和官方训练模板会围绕跑步能力、负重移动、站点技术与比赛策略拆解训练周期。</p><div className="training-stats"><div><strong>8</strong><span>周计划</span></div><div><strong>24</strong><span>核心课表</span></div><div><strong>60+</strong><span>合作训练馆</span></div></div></div>
        <div className="division-panel"><h3>参赛组别</h3>{divisions.map((division) => <div className="division" key={division}><span>{division}</span><b>标准排名</b></div>)}</div>
      </section>
      <section className="section tickets" id="register"><div className="section-heading compact"><p className="eyebrow">Registration</p><h2>选择你的起跑线。</h2></div><div className="ticket-grid">{tickets.map((ticket) => <article className="ticket" key={ticket.name}><h3>{ticket.name}</h3><strong>{ticket.price}</strong><p>{ticket.detail}</p><a href="mailto:race@vork.fit?subject=VORK%20Registration">申请席位</a></article>)}</div></section>
      <section className="section partners"><div><p className="eyebrow">For Brands & Gyms</p><h2>把赛事变成全年生意。</h2></div><p>VORK 为训练馆提供区域认证、社群活动和官方训练内容；为运动品牌提供现场体验、选手数据和城市巡回曝光。</p><a className="button dark" href="mailto:partners@vork.fit?subject=VORK%20Partnership">成为合作伙伴</a></section>
      <section className="section faq"><div className="section-heading compact"><p className="eyebrow">FAQ</p><h2>开赛前你会问的事。</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      <footer><div className="brand"><span className="brand-mark">V</span><span>VORK</span></div><p>Standardized functional fitness racing for every city athlete.</p><a href="#top">回到顶部</a></footer>
    </main>
  );
}
