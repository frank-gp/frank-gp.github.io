const dataBase = [
  {
    id: 250302,
    url: "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic",
    image: "https://i.postimg.cc/mgMxgxkB/transpaservic-mockup.webp",
    title: "Ticket Management System",
    description: `Sistema de tickets para la empresa Transpaservic`,
    category: "Mobile Projects",
    github: "https://github.com/fgp555/",
    language: [{ name: "React Native" }, { name: "NestJS" }, { name: "MySQL" }, { name: "Play Store" }],
  },
  {
    id: 250301,
    category: "Full Stack Projects",
    image: "https://i.postimg.cc/TPxkv0w3/mockup-desktop.webp",
    title: "Transport Website",
    description: `Servicio de Trasporte de Carga Pesada`,
    github: "https://github.com/fgp555/",
    url: "https://e-transportech.org",
    language: [{ name: "Figma" }, { name: "Angular" }, { name: "Bootstrap" }, { name: "NodeJS" }, { name: "CPanel" }],
    // new data
    images: [
      { name: "home page", url: "https://i.postimg.cc/1XBWtQV7/mockup-desktop.webp" },
      { name: "contact page", url: "https://i.postimg.cc/1XBWtQV7/mockup-desktop.webp" },
    ],
    buttons: [
      { name: "github", url: "https://github.com/fgp555/" },
      { name: "live", url: "https://e-transportech.org" },
      { name: "playstore", url: "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic" },
      { name: "video demo", url: "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic" },
      { name: "download", url: "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic" },
      { name: "buy code", url: "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic" },
    ],
    content: {
      title: "Mobile & Full Stack - Sistema de Gestión de Vouchers para Empresas de Transporte",
      subtitle: "Freelancer Remoto - Enero 2025 - Marzo 2025",
      company: "Transportech",
      image: "https://i.postimg.cc/1XBWtQV7/mockup-desktop.webp",
      features: [
        ["design", "Servicio de Trasporte de Carga Pesada"],
        ["devop", "Sistema de tickets para la empresa Transpaservic"],
        ["other", "Sistema de tickets para la empresa Transpaservic"],
      ],
      category: "Full Stack Projects",
      dates: [{ start: "2022-06-01" }, { end: "2022-06-01" }, { duration: "1 mes " }],
      colaborators: [
        {
          roles: ["frontend", "design"],
          user: {
            name: "Giovanna",
            links: {
              linkedin: "https://www.linkedin.com/in/giovanna-martinez-russo/",
              github: "https://github.com/GMRGIOVANNAMARTINEZRUSSO",
              portfolio: "https://gmrgiovannamartinezrusso.github.io/",
            },
            image: "https://github.com/GMRGIOVANNAMARTINEZRUSSO.png",
            title: "Full Stack Developer",
            description: "Developer apasionada con experiencia en el desarrollo de interfaces intuitivas y atractivas.",
          },
        },
      ],
      technologies: {
        frontend: [
          { name: "Angular", icon: "fab fa-angular" },
          { name: "Bootstrap", icon: "fab fa-bootstrap" },
        ],
        backend: [{ name: "NodeJS", icon: "fab fa-node-js" }],
        database: [{ name: "MySQL", icon: "fas fa-database" }],
        devops: [{ name: "CPanel", icon: "fas fa-server" }],
        design: [{ name: "Figma", icon: "fab fa-figma" }],
        other: [{ name: "Docker", icon: "fab fa-docker" }],
      },
    },
  },

  {
    id: 250301,
    url: "http://transpaservic.com.co/",
    image: "https://i.postimg.cc/qqWL8KSK/transpaservic-web.webp",
    title: "Ticket Management System",
    description: "Sistema de tickets para la empresa Transpaservic",
    category: "Full Stack Projects",
    github: "https://github.com/fgp555/",
    language: [{ name: "ReactJS" }, { name: "NestJS" }, { name: "MySQL" }, { name: "CPanel" }],
  },
  {
    id: 241201,
    url: "https://crefi.giomr.site/admin",
    image: "https://i.postimg.cc/pXH5G93K/crefi.webp",
    title: "Appointment System",
    description: `Creador de citas <br> 
    <a href='https://www.linkedin.com/in/giovanna-martinez-russo/' target='_blank'>Front: Gio</a> | 
    <a href='https://www.linkedin.com/in/fgp555/' target='_blank'>Back: Frank</a>
    `,
    category: "Full Stack Projects",
    github: "https://github.com/fgp555/gio-m3-appointments",
    language: [
      { name: "ReactJS" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
    ],
  },
  {
    id: 241102,
    url: "https://youtu.be/_okCMMfx1O4",
    image: "https://i.postimg.cc/26Kjp5kd/shortener.webp",
    title: "URL Shortener",
    description: `Acortador de URL con copias de seguridad y estatisticas`,
    category: "Full Stack Projects",
    github: "https://github.com/frank-gp/fgpone",
    language: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "NodeJS" }, { name: "MongoDB" }],
  },
  {
    id: 241101,
    url: "https://youtu.be/DY9lwTE08aw",
    image: "https://i.postimg.cc/pXdQYG7g/shipping.webp",
    title: "Shipping System",
    description: `Sistema de envios y entregas con generacion de reportes en PDF`,
    category: "Full Stack Projects",
    github: "https://github.com/fgp555/nere-shipping-project",
    language: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "NestJS" }, { name: "PostgreSQL" }],
  },
  {
    id: 240901,
    url: "https://youtu.be/vSBttwQO62k",
    image: "https://i.postimg.cc/3JKBdJYC/bpventures.webp",
    title: "BP Ventures",
    description: `Sistema de entregables para la empresa BP Ventures <br>
    Front: <a href='https://www.linkedin.com/in/giovanna-martinez-russo/' target='_blank'>Gio</a> | 
    <a href='https://www.linkedin.com/in/vanesa-bucher-623295245/' target='_blank'>Vane</a> | 
    <a href='https://www.linkedin.com/in/fhdzleon/' target='_blank'>Feli</a> <br>
    Back: <a href='https://www.linkedin.com/in/fgp555/' target='_blank'>Frank</a> | 
    <a href='https://www.linkedin.com/in/ricardoolivarit' target='_blank'>Ricardo</a> | 
    <a href='https://www.linkedin.com/in/josemavsg/' target='_blank'>Jose</a> | 
    `,
    category: "Full Stack Projects",
    github: "https://github.com/fgp555/bpventures.com.ar",
    language: [
      { name: "NextJS" },
      { name: "Tailwind" },
      { name: "TypeScript" },
      { name: "NestJS" },
      { name: "PostgreSQL" },
    ],
  },
  {
    id: 103,
    url: "https://mariaknoll.website/",
    image: "https://i.postimg.cc/Nfpkq761/mariaknoll-rest-png.webp",
    title: "mariaknoll.website",
    description: `Catalogo full stack para vestido de fiesta <br> 
    <a href='https://www.instagram.com/vanesabucher/' target='_blank'>Front: Vane</a> | 
    <a href='https://www.linkedin.com/in/fgp555/' target='_blank'>Back: Frank</a>
    `,
    category: "Full Stack Projects",
    github: "https://github.com/buchervanesa/mariaknoll.website",
    language: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Node JS" }, { name: "MongoDB" }],
  },
  {
    id: 102,
    url: "https://catalogo-web.github.io/catalogo-petulap/",
    image: "https://i.postimg.cc/qBcGQdgD/petulap.webp",
    title: "Venta de Laptops",
    description: "Catalogo para la venta de laptop",
    category: "Full Stack Projects",
    github: "https://github.com/catalogo-web/catalogo-petulap",
    language: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
  },
  {
    id: 101,
    url: "https://foudetoi.rest/",
    image: "https://i.postimg.cc/vHQtNSVY/foudetoi-rest.webp",
    title: "Fou De Toi Restaurant",
    description: "Restaurante vegetariano",
    category: "Full Stack Projects",
    language: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
  },
  {
    id: 201,
    url: "https://frank-gp.github.io/app/mini-postman/",
    image: "https://i.postimg.cc/mkSNr70W/mini-postman.webp",
    title: "Mini-Postman App",
    description: "App Mini-Postman for Get Post and Put Request",
    category: "Tools",
    github: "https://frank-gp.github.io/app/mini-postman/",
    language: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
  },
];
