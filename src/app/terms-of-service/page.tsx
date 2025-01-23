import Footer from "../components/footer";
import NavBar from "../components/navbar";

const TermsOfService = () => {
  return (
    <div>
      <NavBar />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-3xl pt-12">
          <h1 className="text-3xl font-bold text-text mb-8">
            Terms of Service
          </h1>

          <div className="space-y-6 text-text/80">
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-text">
                By accessing and using Focus Grid ("the App"), you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                2. Description of Service
              </h2>
              <p className="text-text">
                Focus Grid is a habit tracking application that allows users to
                create, track, and manage their daily habits. The App provides
                features including habit creation, daily logging, progress
                tracking, and social sharing capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                4. Privacy
              </h2>
              <p className="text-text">
                Your privacy is important to us. Our use of your personal
                information is governed by our Privacy Policy. By using the App,
                you consent to the collection and use of information as detailed
                in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                5. User Content
              </h2>
              <p className="text-text">
                You retain ownership of any content you share through the App.
                By posting content, you grant Focus Grid a worldwide,
                non-exclusive license to use, copy, modify, and display that
                content in connection with the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                6. Prohibited Activities
              </h2>
              <p className="text-text">
                Users agree not to engage in any activities that may:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-text">
                <li>Violate any laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Interfere with the operation of the App</li>
                <li>Harass or harm other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                7. Modifications to Service
              </h2>
              <p className="text-text">
                We reserve the right to modify or discontinue the App at any
                time, with or without notice. We shall not be liable to you or
                any third party for any modification, suspension, or
                discontinuance of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                8. Contact Information
              </h2>
              <p className="text-text">
                For questions about these Terms of Service, please contact us at
                schroedernathan2011@icloud.com
              </p>
            </section>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;
