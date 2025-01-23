import Footer from "../components/footer";
import NavBar from "../components/navbar";

const PrivacyPolicy = () => {
  return (
    <div>
      <NavBar />

      <div className="relative isolate px-6 pt-14 lg:px-8 text-text">
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
          <h1 className="text-3xl font-bold text-text mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-text/80">
            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                1. Introduction
              </h2>
              <p className="text-text">
                Welcome to Focus Grid. We respect your privacy and are committed
                to protecting your personal data. This privacy policy explains
                how we collect, use, and safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                2. Information We Collect
              </h2>
              <p className="text-text">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-text">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
              <p className="text-text mt-4">
                We automatically collect certain information when you use our
                services:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-text">
                <li>Device information</li>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Usage data</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-text">We use your information to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-text">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you updates and marketing communications</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
                <li>Detect and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                4. Information Sharing
              </h2>
              <p className="text-text">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-text">
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties in connection with a business transfer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                5. Data Security
              </h2>
              <p className="text-text">
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                6. Your Rights
              </h2>
              <p className="text-text">You have the right to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2 text-text">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

   

            <section>
              <h2 className="text-2xl font-semibold text-text mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-text">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page.
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

export default PrivacyPolicy;
