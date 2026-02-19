import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About four minute thoughts.",
};

export default function AboutPage() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p>
        <strong>four minute thoughts</strong> is a blog about whatever fits in
        four minutes of reading. Tech, life, ideas — no single theme, no fixed
        schedule.
      </p>
      <p>
        The name comes from a simple constraint: if something takes longer than
        four minutes to read, it&apos;s too long for this place. Brevity is the
        point.
      </p>
      <p>
        Built with Next.js. Hosted on the open web. No tracking, no ads, no
        newsletter popups.
      </p>
    </div>
  );
}
