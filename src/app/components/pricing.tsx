import { CheckIcon, MinusIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const tiers = [
  {
    name: "Free",
    id: "tier-Free",
    href: "#",
    priceMonthly: "$0",
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: "$49",
    mostPopular: true,
  },
];

type TierName = "Free" | "Pro";
type TierValue = boolean | string;
type TierFeature = {
  name: string;
  tiers: Record<TierName, TierValue>;
};

const sections: { name: string; features: TierFeature[] }[] = [
  {
    name: "Features",
    features: [
      {
        name: "Habit tracking limit",
        tiers: { Free: "3", Pro: "Unlimited" },
      },
      {
        name: "Habit streaks",
        tiers: { Free: true, Pro: true },
      },
      {
        name: "Daily reminders",
        tiers: { Free: true, Pro: true },
      },
      {
        name: "Archived habits",
        tiers: { Free: false, Pro: true },
      },
      
    ],
  },
  {
    name: "Reporting",
    features: [
    ],
  },
  {
    name: "Support",
    features: []
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7  font-semibold text-primary">Pricing</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-text sm:text-6xl">
            Transform your routines with Pro
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-500 sm:text-xl/8">
          Take control of your daily routines using advanced tracking, detailed insights,
          and unlimited habits to help you achieve your goals.
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200 p-8"
                  : "p-8"
              )}
            >
              <h3 id={tier.id} className="text-sm/6 font-semibold text-text">
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1 text-text">
                <span className="text-4xl font-semibold">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold">/month</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-blue-800 text-text hover:bg-blue-700 mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    : "text-text ring-1 ring-inset ring-blue-500 hover:ring-blue-300 mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                )}
              >
                Download App
              </a>
              <ul role="list" className="mt-10 space-y-4 text-sm/6 text-text">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name as TierName] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-blue-500"
                            />
                            <span>
                              {feature.name}{" "}
                              {typeof feature.tiers[tier.name as TierName] ===
                              "string" ? (
                                <span className="text-sm/6 text-gray-500">
                                  ({feature.tiers[tier.name as TierName]})
                                </span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  style={{
                    marginLeft: `${
                      (tiers.findIndex((tier) => tier.mostPopular) + 1) * 25
                    }%`,
                  }}
                  aria-hidden="true"
                  className="flex w-1/4 px-4"
                >
                  <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className={classNames(
                        tier.mostPopular
                          ? "px-6 pt-6 xl:px-8 xl:pt-8"
                          : "px-6 pt-6 xl:px-8 xl:pt-8"
                      )}
                    >
                      <div className="text-sm/7 font-semibold text-gray-900">
                        {tier.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-gray-900">
                        <span className="text-4xl font-semibold">
                          {tier.priceMonthly}
                        </span>
                        <span className="text-sm/6 font-semibold">/month</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? "bg-indigo-600 text-white hover:bg-indigo-500 mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        )}
                      >
                        Buy plan
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? "pt-8" : "pt-16",
                          "pb-4 text-sm/6 font-semibold text-gray-900"
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          scope="row"
                          className="py-4 text-sm/6 font-normal text-gray-900"
                        >
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name as TierName] ===
                            "string" ? (
                              <div className="text-center text-sm/6 text-gray-500">
                                {feature.tiers[tier.name as TierName]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name as TierName] ===
                                true ? (
                                  <CheckIcon
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-indigo-600"
                                  />
                                ) : (
                                  <MinusIcon
                                    aria-hidden="true"
                                    className="mx-auto size-5 text-gray-400"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name as TierName] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
