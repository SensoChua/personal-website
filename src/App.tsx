import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { person, navItems, about, facts, journey, skills, projects } from './data/resume'
import BorderGlow from './components/BorderGlow'
import DepthText from './components/DepthText'
import GlowCursor from './components/GlowCursor'
import GooeyNav from './components/GooeyNav'
import TextCursor from './components/TextCursor'


const borderGlowProps = {
  edgeSensitivity: 30,
  glowColor: '40 80 80',
  backgroundColor: '#f0eefa',
  borderRadius: 28,
  glowRadius: 40,
  glowIntensity: 1.0,
  coneSpread: 25,
  animated: false,
  colors: ['#c084fc', '#f472b6', '#38bdf8'],
}

const headingDepth = {
  layers: 34,
  depth: 2.4,
  faceColor: '#1f1c1c',
  depthColor: '#ffffff',
  tilt: 7.5,
  pointerTracking: true,
  smoothing: 0.14,
  perspective: 900,
  autoOrbit: true,
  orbitSpeed: 0.35,
  fontSize: 'clamp(3rem, 12vw, 7rem)',
  fontWeight: 900,
  shadow: true,
}

export default function App() {
  return (
    <GlowCursor
      color="#67E8F9"
      secondaryColor="#A78BFA"
      trailLength={40}
      trailWidth={8}
      trailTaper={0.8}
      followSpeed={0.16}
      glowIntensity={1.9}
      glowSpread={1.2}
      hotspot={0.65}
      brightness={1.25}
      opacity={1}
      pulseSpeed={1.1}
      noiseStrength={0.035}
      idleFade
      idleTimeout={700}
      fadeDuration={900}
      blendMode="screen"
    >
      <>
      {/* ——— Hero stage（背景照片 + 个人信息）——— */}
      <section className="hero" aria-label="intro">
        <div className="footer-background" aria-hidden="true">
          <picture>
            <source media="(max-width: 700px)" srcSet="hero-mobile.jpg" />
            <img src="hero-background.png" alt="" />
          </picture>
        </div>

        <div className="jobs">
          <span className="headline job-title">
            <span>SHENGSHUO</span>
            <span>CAI 蔡胜烁</span>
          </span>
          <div className="site-nav">
            <GooeyNav
              items={navItems.map((item) => ({ label: `${item.zh} · ${item.en}`, href: `#${item.id}` }))}
              particleCount={14}
              particleDistances={[80, 10]}
              particleR={70}
              timeVariance={380}
              animationTime={600}
              initialActiveIndex={-1}
            />
          </div>
        </div>

        <div className="contact">
          <div className="headline contact-links">
            <span>let’s work</span>
            <span>together!</span>
          </div>
          <div className="socials">
            <a href={`mailto:${person.email}`} aria-label="邮箱 Email">
              <Mail size={20} strokeWidth={1.6} />
            </a>
            <a href={`tel:${person.phone}`} aria-label="电话 Phone">
              <Phone size={20} strokeWidth={1.6} />
            </a>
            <span aria-label="所在地 Location">
              <MapPin size={20} strokeWidth={1.6} />
            </span>
          </div>
          <a className="cv-link" href="resume.pdf" target="_blank" rel="noreferrer">
            <Download size={14} strokeWidth={1.8} />
            下载简历 PDF
          </a>
        </div>

        <TextCursor
          text="招我！"
          spacing={80}
          followMouseDirection
          randomFloat
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
        />
      </section>

      {/* ——— 关于我 ——— */}
      <section className="band about" id="about">
        <div className="band-head">
          <span className="band-index">01</span>
          <h2><DepthText text="About Me" {...headingDepth} /></h2>
          <span className="band-zh">{about.zh}</span>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="glow-facts-list">
            {facts.map((f) => (
              <BorderGlow key={f.k} className="glow-facts" {...borderGlowProps}>
                <div className="glow-fact">
                  <span>{f.k}</span>
                  <b>{f.v}</b>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 履历 ——— */}
      <section className="band" id="journey">
        <div className="band-head">
          <span className="band-index">02</span>
          <h2><DepthText text="Journey" {...headingDepth} /></h2>
          <span className="band-zh">教育 & 工作经历</span>
        </div>
        <div className="glow-list">
          {journey.map((row) => (
            <BorderGlow key={row.title} {...borderGlowProps}>
              <div className="glow-journey">
                <div className="glow-journey-aside">
                  <span className="glow-journey-period">{row.period}</span>
                  <span className="glow-journey-meta">{row.meta}</span>
                </div>
                <div className="glow-journey-main">
                  <h3>{row.title}</h3>
                  <p>{row.desc}</p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* ——— 技能 ——— */}
      <section className="band" id="skills">
        <div className="band-head">
          <span className="band-index">03</span>
          <h2><DepthText text="Skills" {...headingDepth} /></h2>
          <span className="band-zh">专业技能</span>
        </div>
        <div className="glow-list">
          {skills.map((skill) => (
            <BorderGlow key={skill.no} {...borderGlowProps}>
              <div className="glow-skill">
                <div className="glow-skill-aside">
                  <span className="glow-skill-no">{skill.no}</span>
                  <span className="glow-skill-meta">{skill.en}</span>
                </div>
                <div className="glow-skill-main">
                  <h3>{skill.zh}</h3>
                  <p>{skill.desc}</p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* ——— 项目 ——— */}
      <section className="band" id="projects">
        <div className="band-head">
          <span className="band-index">04</span>
          <h2><DepthText text="Projects" {...headingDepth} /></h2>
          <span className="band-zh">项目与实战</span>
        </div>
        <div className="glow-list">
          {projects.map((p) => (
            <BorderGlow key={p.no} {...borderGlowProps}>
              <div className="glow-project">
                <div className="glow-project-head">
                  <span className="glow-project-no">{p.no}</span>
                  <div>
                    <span className="glow-project-tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p className="glow-project-meta">{p.meta}</p>
                  </div>
                </div>
                <p className="glow-project-desc">{p.desc}</p>
                <p className="glow-project-result">
                  <b>成果</b>
                  {p.result}
                </p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      {/* ——— 页脚 · 联系 ——— */}
      <footer className="closing" id="contact" aria-label="Footer">
        <span className="closing-eyebrow">say hey · 期待与你共事</span>
        <h2>
          let’s build
          <br />
          together.
        </h2>
        <p className="closing-note">从一次坦诚的交流开始，把商业想法落地为可持续增长。</p>
        <div className="closing-links">
          <a href={`mailto:${person.email}`}>
            <Mail size={16} strokeWidth={1.6} />
            {person.email}
          </a>
          <a href={`tel:${person.phone}`}>
            <Phone size={16} strokeWidth={1.6} />
            {person.phone}
          </a>
          <span>
            <MapPin size={16} strokeWidth={1.6} />
            {person.region}
          </span>
          <a className="cv" href="resume.pdf" target="_blank" rel="noreferrer">
            <Download size={15} strokeWidth={1.8} />
            下载简历
          </a>
        </div>
        <p className="copyright">
          © 2026 {person.nameZh} · {person.nameEn} — 商业运营 / 市场营销 / 数据分析
        </p>
      </footer>
      </>
    </GlowCursor>
  )
}
