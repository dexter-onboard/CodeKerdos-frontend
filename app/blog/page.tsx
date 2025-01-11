// pages/blog.js
import Head from "next/head";
import Image from "next/image";
import styles from "./styles/blog.module.css";
import Navbar from "./utils/navbar";
import ProgrammingLanguage from "./utils/programming";
import ScriptingLanguage from "./utils/scripting";
import ScriptingVsProgramming from "./utils/scriprtingvsProgramming";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Scripting vs Programming Languages</title>
          <meta
            name="description"
            content="A detailed discussion on the differences between scripting and programming languages."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Scripting vs Programming Languages</h1>

          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              When diving into the world of software development, you'll often
              hear the terms "scripting" and "programming" languages. While they
              may seem similar, they serve different purposes and have distinct
              characteristics. This blog aims to shed light on the differences
              between scripting and programming languages.
            </p>
            <ScriptingVsProgramming />
          </section>

          <section className={styles.section}>
            <h2>What is a Programming Language?</h2>
            <p>
              Programming languages are used to create standalone applications.
              They are typically compiled into machine code that can be executed
              directly by the hardware. Examples include C, C++, and Java.
            </p>
            <ProgrammingLanguage />
          </section>

          <section className={styles.section}>
            <h2>What is a Scripting Language?</h2>
            <p>
              Scripting languages are often interpreted and are used to automate
              tasks within other programs. They are usually embedded into
              software environments. Examples include Python, JavaScript, and
              Ruby.
            </p>
            <ScriptingLanguage />
          </section>

          <section className={styles.section}>
            <h2>Key Differences</h2>
            <ul>
              <li>
                <strong>Execution:</strong> Programming languages are compiled,
                while scripting languages are interpreted.
              </li>
              <li>
                <strong>Performance:</strong> Compiled languages generally offer
                better performance.
              </li>
              <li>
                <strong>Use Cases:</strong> Scripting languages are often used
                for web development and automation, whereas programming
                languages are used for system-level programming.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Conclusion</h2>
            <p>
              Both scripting and programming languages have their own strengths
              and weaknesses. The choice between them depends on the specific
              requirements of your project. Understanding these differences can
              help you make an informed decision.
            </p>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>© 2023 Scripting vs Programming Blog</p>
        </footer>
      </div>
    </>
  );
}
