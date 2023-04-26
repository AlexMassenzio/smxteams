import Link from "next/link";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Made by <strong className="text-invis">Invis</strong>
          </h1>
          <p className="py-6">
            SMXTeams is meant to be a simple way to unofically keep track of
            scores for SMX Teams charts. This is a fan project and is not
            affiliated with Step Revolution in any official capacity.
          </p>
          <Link className="btn btn-primary" href="/signup">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
