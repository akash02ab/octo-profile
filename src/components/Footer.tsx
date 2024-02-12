import style from "./style/footer.style";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <span className={style.text}>Build with</span>
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link3}
      >
        Next.js
      </a>
      &middot;
      <a
        href="https://www.chartjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link2}
      >
        Chart.js
      </a>
      &middot;
      <a
        href="https://github.com/IonicaBizau/node-gh-polyglot"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link1}
      >
        GitHub Polyglot
      </a>
      &middot;
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link2}
      >
        Tailwind CSS
      </a>
      <span className={style.text}>and</span>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.link3}
      >
        TypeScript
      </a>
    </footer>
  )
}