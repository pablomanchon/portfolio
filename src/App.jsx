import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, CodeXml, Download, Mail, Menu, UserRound, X } from 'lucide-react'

const projects = [
  {
    number: '01', title: 'Zafiro Turnos', type: 'SaaS · Gestión de turnos',
    description: 'Plataforma de reservas online y gestión diaria para barberías y peluquerías. Una experiencia mobile-first conectada a datos en tiempo real.',
    tags: ['Turnos online', 'Agenda digital', 'App móvil'], image: '/projects/zafiro-turnos.jpg', url: 'https://www.zafiroturnos.com.ar/'
  },
  {
    number: '02', title: 'Instituto Richardi', type: 'Web institucional · Sistema interno',
    description: 'Sitio institucional y solución integral para gestionar muestras, clientes y resultados, con envío automático por email. Conectada a un equipo FOSS, suma una biblioteca digital y un complemento de IA personalizado vía MCP.',
    tags: ['Integración FOSS', 'Biblioteca digital', 'IA con MCP'], image: '/projects/instituto-richardi.jpg', url: 'https://institutoinvestigacionrichardi.com/'
  },
  {
    number: '03', title: 'Zafrix', type: 'SaaS · Stock y ventas',
    description: 'Aplicación multiusuario para gestionar stock, ventas, caja y facturación. Organiza cada negocio con accesos específicos para dueños, administradores y vendedores, e incluye un complemento de IA personalizado vía MCP.',
    tags: ['Control de stock', 'Ventas y facturación', 'IA con MCP'], image: '/projects/zafrix-stock-ventas.png', url: 'https://www.zafrixsoftware.com/', containImage: true
  },
  {
    number: '04', title: 'Casa Tano', type: 'SaaS · Gestión de bodega',
    description: 'Sistema para controlar barricas, barriles, tanques y ánforas de una bodega. Escaneo de QR, seguimiento de litros y rellenos, y gestión de ventas, caja y vinos desde PC o celular, con un complemento de IA personalizado vía MCP.',
    tags: ['Control de bodega', 'Códigos QR', 'IA con MCP'], image: '/projects/casatano.jpg', url: 'https://casatano-gestion.vercel.app'
  },
  {
    number: '05', title: 'Rodar', type: 'SaaS · Gestión para bicicleterías',
    description: 'Plataforma para organizar el taller de una bicicletería: services, clientes, bicicletas, productos con alerta de stock y ventas, con una vista pensada para usar desde el celular.',
    tags: ['Gestión de services', 'Control de stock', 'Ventas'], image: '/projects/rodarmz.jpg', url: 'https://www.rodarmz.com'
  }
]

const skills = ['React', 'JavaScript', 'Node.js', 'Supabase', 'SQL', 'HTML & CSS', 'Android & Desktop', 'Git & GitHub', 'SEO técnico']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
    }), { threshold: .12 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const onPointerMove = ({ clientX, clientY }) => {
      root.style.setProperty('--mouse-x', `${clientX}px`)
      root.style.setProperty('--mouse-y', `${clientY}px`)
      root.style.setProperty('--shift-x', `${(clientX / innerWidth - .5) * 18}px`)
      root.style.setProperty('--shift-y', `${(clientY / innerHeight - .5) * 18}px`)
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  const tiltProject = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--px', `${((event.clientX - rect.left) / rect.width - .5) * 12}px`)
    event.currentTarget.style.setProperty('--py', `${((event.clientY - rect.top) / rect.height - .5) * 12}px`)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="nav-wrap">
        <a className="logo" href="#inicio" aria-label="Pablo Manchon — Inicio"><img src="/logo.svg" alt="" /></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navegación principal">
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#perfil" onClick={closeMenu}>Perfil</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a className="nav-cv" href="/Pablo_Manchon_Richardi_CV.pdf" download onClick={closeMenu}>Descargar CV <Download size={15}/></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-orbit" aria-hidden="true"><span /></div>
          <div className="status"><i /> Disponible para nuevos proyectos</div>
          <div className="hero-title">
            <p className="kicker">Full Stack · Web, Android & Desktop · Argentina</p>
            <h1>Diseño y desarrollo<br/>productos <em>digitales.</em></h1>
          </div>
          <div className="hero-bottom">
            <p>Transformo necesidades de negocio en productos digitales para web, Android y desktop, claros y listos para crecer.</p>
            <a className="round-link" href="#proyectos" aria-label="Ver proyectos"><ArrowDown /></a>
          </div>
        </section>

        <div className="motion-strip" aria-hidden="true">
          <div className="motion-track">
            <div className="motion-group">
              <span>Desarrollo web</span><i /> <span>Apps Android</span><i /> <span>Experiencias desktop</span><i /> <span>Productos que crecen</span><i />
              <span>Desarrollo web</span><i /> <span>Apps Android</span><i /> <span>Experiencias desktop</span><i /> <span>Productos que crecen</span><i />
            </div>
            <div className="motion-group">
              <span>Desarrollo web</span><i /> <span>Apps Android</span><i /> <span>Experiencias desktop</span><i /> <span>Productos que crecen</span><i />
              <span>Desarrollo web</span><i /> <span>Apps Android</span><i /> <span>Experiencias desktop</span><i /> <span>Productos que crecen</span><i />
            </div>
          </div>
        </div>

        <section className="projects section-pad" id="proyectos">
          <header className="section-head" data-reveal>
            <div><span className="section-no">01</span><p>Trabajo seleccionado</p></div>
            <h2>Proyectos que resuelven<br/> <em>problemas.</em></h2>
          </header>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
                <a className={`project-visual${project.containImage ? ' project-visual--contain' : ''}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title}`} onPointerMove={tiltProject} onPointerLeave={event => { event.currentTarget.style.removeProperty('--px'); event.currentTarget.style.removeProperty('--py') }}>
                  <img src={project.image} alt={`Captura del proyecto ${project.title}`} />
                  <span className="visit"><ArrowUpRight /></span>
                </a>
                <div className="project-info">
                  <span className="project-number">{project.number}</span>
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="perfil">
          <header className="section-head light" data-reveal>
            <div><span className="section-no">02</span><p>Sobre mí</p></div>
            <h2>Del concepto a<br/> <em>producción.</em></h2>
          </header>
          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <p className="lead">Soy Pablo, desarrollador Full Stack con foco en crear herramientas útiles para web, Android y desktop.</p>
              <p>Me muevo entre frontend, backend y datos para construir soluciones completas: interfaces responsivas, lógica de negocio, paneles administrativos, roles y automatizaciones.</p>
              <p>Disfruto entender el problema antes de escribir código y acompañar cada producto desde la idea hasta su publicación.</p>
              <a href="/Pablo_Manchon_Richardi_CV.pdf" className="text-link" download>Descargar CV <Download size={18}/></a>
            </div>
            <div className="skill-block" data-reveal>
              <p className="mini-label">Herramientas & tecnologías</p>
              <div className="skill-list">{skills.map((skill, i) => <div key={skill}><span>{String(i + 1).padStart(2, '0')}</span>{skill}</div>)}</div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contacto">
          <div className="contact-top" data-reveal>
            <span className="section-no">03</span>
            <p>¿Tenés una idea o un proyecto en mente?</p>
          </div>
          <a className="contact-title" href="mailto:pablomanchon97@gmail.com" data-reveal>Hablemos<span>.</span> <ArrowUpRight /></a>
          <div className="contact-footer">
            <p>Disponible para proyectos, colaboraciones<br/>y oportunidades de trabajo.</p>
            <div className="socials">
              <a href="mailto:pablomanchon97@gmail.com"><Mail size={18}/> Email</a>
              <a href="https://github.com/pablomanchon" target="_blank" rel="noreferrer"><CodeXml size={18}/> GitHub</a>
              <a href="https://www.linkedin.com/in/pablo-manchon-richardi-471346252/" target="_blank" rel="noreferrer"><UserRound size={18}/> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} Pablo Manchon</span><a href="#inicio">Volver arriba ↑</a></footer>
    </>
  )
}

export default App
