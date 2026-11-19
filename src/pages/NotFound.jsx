import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <section className="section text-center">
      <Seo title="Page not found" path="/404" description="This page could not be found." />
      <div className="container-x">
        <h1 className="text-5xl text-maroon-800">This page could not be found</h1>
        <p className="mt-4 text-lg text-ink/70">The link may be old or mistyped.</p>
        <Link to="/" className="btn-maroon mt-8">Back to home</Link>
      </div>
    </section>
  );
}
