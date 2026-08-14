// Style reminder: Laravel Command Center — terminal is the signature interaction, instant and readable.

import { FormEvent, useEffect, useRef, useState } from "react";
import { Check, ChevronRight, Command, Copy, Terminal as TerminalIcon } from "lucide-react";
import { copy, contact, experiences, Lang, projects, skillGroups, stats, text } from "@/lib/portfolio-data";

type Line = { kind: "command" | "output" | "meta"; content: string };

type Props = { lang: Lang };

const commandNames = ["php artisan about", "php artisan skills", "php artisan projects", "php artisan experience", "php artisan contact", "php artisan help", "help", "clear"];

export default function Terminal({ lang }: Props) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<Line[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([{ kind: "meta", content: text(copy.terminal.intro, lang) }]);
    setInput("");
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const execute = (raw: string) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setHistory([{ kind: "meta", content: text(copy.terminal.intro, lang) }]);
      setInput("");
      return;
    }

    const normalized = command.startsWith("php artisan ") ? command : command === "help" ? "php artisan help" : command;
    let output: string[];
    if (normalized === "php artisan about") {
      output = lang === "ar" ? ["Nabil Hamada Ebrahim", "Full-Stack Developer متخصص في PHP / Laravel", "أبني أنظمة ERP وCRM آمنة، سريعة، وقابلة للتوسع.", "الموقع: الجيزة، مصر"] : ["Nabil Hamada Ebrahim", "Full-Stack Developer focused on PHP / Laravel", "Building secure, fast, scalable ERP and CRM systems.", "Location: Giza, Egypt"];
    } else if (normalized === "php artisan skills") {
      output = skillGroups.map((group) => `${text(group.label, lang)} :: ${group.items.slice(0, 4).join(" · ")}`);
    } else if (normalized === "php artisan projects") {
      output = projects.map((project) => `${project.number}  ${project.title} — ${text(project.type, lang)}`);
    } else if (normalized === "php artisan experience") {
      output = experiences.map((experience) => `${experience.period}  ${experience.company} — ${text(experience.role, lang)}`);
    } else if (normalized === "php artisan contact") {
      output = [`email    ${contact.email}`, `github   github.com/nabil12ful`, `linkedin linkedin.com/in/nabil7amada`];
    } else if (normalized === "php artisan help") {
      output = lang === "ar" ? ["الأوامر المتاحة:", ...commandNames.filter((name) => name !== "clear"), "clear — تنظيف الجلسة"] : ["Available commands:", ...commandNames.filter((name) => name !== "clear"), "clear — reset session"];
    } else {
      output = lang === "ar" ? [`الأمر غير معروف: ${raw}`, "استخدم php artisan help لرؤية الأوامر المتاحة."] : [`Command not found: ${raw}`, "Run php artisan help to see available commands."];
    }

    setHistory((current) => [...current, { kind: "command", content: raw }, ...output.map((content) => ({ kind: "output" as const, content }))]);
    setInput("");
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    execute(input);
  };

  const copyPrompt = async () => {
    await navigator.clipboard?.writeText("php artisan about");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-chrome">
        <div className="terminal-dots" aria-hidden="true"><span /><span /><span /></div>
        <div className="terminal-title"><TerminalIcon size={14} /> {text(copy.terminal.title, lang)}</div>
        <button className="terminal-copy" onClick={(event) => { event.stopPropagation(); copyPrompt(); }} aria-label={lang === "ar" ? "نسخ أمر تجريبي" : "Copy example command"}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className="terminal-body" ref={scrollRef} dir="ltr">
        <div className="terminal-intro">{text(copy.terminal.intro, lang)}</div>
        {history.map((line, index) => (
          <div className={`terminal-line terminal-${line.kind}`} key={`${line.content}-${index}`}>
            {line.kind === "command" && <span className="terminal-prompt">$</span>}
            <span>{line.content}</span>
          </div>
        ))}
        <form className="terminal-form" onSubmit={submit}>
          <span className="terminal-prompt"><ChevronRight size={15} />$</span>
          <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} aria-label={text(copy.terminal.hint, lang)} autoComplete="off" spellCheck="false" placeholder={text(copy.terminal.hint, lang)} />
          <button type="submit" className="terminal-submit" aria-label={text(copy.terminal.run, lang)}><Command size={15} /></button>
        </form>
      </div>
      <div className="terminal-suggestions" dir={lang === "ar" ? "rtl" : "ltr"}>
        <span>{text(copy.terminal.suggestions, lang)}</span>
        <div className="suggestion-list">
          {copy.terminal.commands[lang].map((command) => <button key={command} onClick={() => execute(command)}>{command}</button>)}
        </div>
      </div>
    </div>
  );
}
