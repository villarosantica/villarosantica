import { defineCollection, z } from "astro:content";

const homepage = defineCollection({
  type: "data",
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    intro: z.object({
      titolo: z.string(),
      testo: z.string(),
    }),
    location: z.object({
      immagine: z.string(),
      titolo: z.string(),
      testo: z.string(),
      link: z.string(),
    }),
    eventi: z.object({
      immagine: z.string(),
      titolo: z.string(),
      testo: z.string(),
      link: z.string(),
    }),
    intermezzo: z.object({
      titolo: z.string(),
      testo: z.string(),
    }),
    galleria: z.object({
      immagine: z.string(),
      titolo: z.string(),
      testo: z.string(),
      link: z.string(),
    }),
    chiusura: z.object({
      titolo: z.string(),
      testo: z.string(),
    }),
    contatti: z.object({
      immagine: z.string(),
      titolo: z.string(),
      testo: z.string(),
      link: z.string(),
    }),
  }),
});

// La Location
const location = defineCollection({
  type: "data",
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      immagine: z.string(),
      titolo: z.string(),
      testo: z.string(),
    }),
    sezioni: z.array(
      z.object({
        immagine: z.string(),
        testo: z.string(),
        alt: z.string()
      })
    ),
    cta: z.object({
      link: z.string(),
      testo: z.string(),
    }),
  }),
});


// Eventi
const eventi = defineCollection({
  type: "data",
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      immagine: z.string(),
      titolo: z.string(),
      testo: z.string(),
    }),
    sezione1: z.object({
      immagine: z.string(),
      testo: z.string(),
    }),
    sezione2: z.object({
      immagine: z.string(),
      testo: z.string(),
    }),
    cta: z.object({
      testo: z.string(),
      link: z.string(),
    }),
  }),
});



const galleria = defineCollection({
  type: "data",
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      immagine: z.string(),
      titolo: z.string(),
      testo: z.string(),
    }),
    cta: z.object({
      testo: z.string(),
      link: z.string(),
    }),
  }),
});

const contatti = defineCollection({
  type: "data",
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      immagine: z.string(),
      titolo: z.string(),
      testo: z.string(),
    }),
    informazioni: z.object({
      nome: z.string(),
      indirizzo: z.string(),
      telefono: z.string(),
      email: z.string(),
      note: z.string(),
    }),
  }),
});

const header = defineCollection({
  type: 'data',
  schema: z.object({
    logo: z.string(),
    menu: z.array(z.object({
      name: z.string(),
      href: z.string()
    }))
  })
});

const footer = defineCollection({
  type: "data",
  schema: z.object({
    logo: z.string(),
    indirizzo: z.string(),
    telefono_1: z.string(),
    telefono_2: z.string(),
    email: z.string(),
    piva: z.string(),
    titolo_form: z.string(),
  }),
});



export const collections = {
  homepage,
  location,
  eventi,
  galleria,
  contatti,
  header,
  footer
};
