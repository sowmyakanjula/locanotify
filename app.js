const { useState } = React;

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <React.Fragment>
      <header className="hero">
        <div className="container hero__content">
        <div className="brand">
          <div className="brand__logo" aria-hidden="true">
            <svg viewBox="0 0 108 108" role="img" focusable="false">
              <defs>
                <linearGradient
                  id="brand-gradient"
                  x1="42.9492"
                  y1="49.59793"
                  x2="85.84757"
                  y2="92.4963"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#44000000" />
                  <stop offset="1" stopColor="#00000000" />
                </linearGradient>
              </defs>
              <path
                d="M31,63.928c0,0 6.4,-11 12.1,-13.1c7.2,-2.6 26,-1.4 26,-1.4l38.1,38.1L107,108.928l-32,-1L31,63.928z"
                fill="url(#brand-gradient)"
              />
              <path
                d="M65.3,45.828l3.8,-6.6c0.2,-0.4 0.1,-0.9 -0.3,-1.1c-0.4,-0.2 -0.9,-0.1 -1.1,0.3l-3.9,6.7c-6.3,-2.8 -13.4,-2.8 -19.7,0l-3.9,-6.7c-0.2,-0.4 -0.7,-0.5 -1.1,-0.3C38.8,38.328 38.7,38.828 38.9,39.228l3.8,6.6C36.2,49.428 31.7,56.028 31,63.928h46C76.3,56.028 71.8,49.428 65.3,45.828zM43.4,57.328c-0.8,0 -1.5,-0.5 -1.8,-1.2c-0.3,-0.7 -0.1,-1.5 0.4,-2.1c0.5,-0.5 1.4,-0.7 2.1,-0.4c0.7,0.3 1.2,1 1.2,1.8C45.3,56.528 44.5,57.328 43.4,57.328L43.4,57.328zM64.6,57.328c-0.8,0 -1.5,-0.5 -1.8,-1.2s-0.1,-1.5 0.4,-2.1c0.5,-0.5 1.4,-0.7 2.1,-0.4c0.7,0.3 1.2,1 1.2,1.8C66.5,56.528 65.6,57.328 64.6,57.328L64.6,57.328z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
            <div>
              <p className="brand__tag">SmartPush</p>
              <p className="brand__title">Location-based push notifications</p>
            </div>
          </div>
          <h1>Understanding Location-Based Push Notifications With Real Case Examples</h1>
          <p className="hero__intro">
            It’s Monday noon, and Adam is thinking about what to have for lunch. The weather is
            nice, and he opts for enjoying a light meal out of the office instead of ordering
            takeout. A few minutes later, he receives a notification from a local café about their
            lunch deals. The options look very appetizing, and Adam decides to give them a try.
          </p>
          <p className="hero__intro">
            This was an example of location-based marketing, a strategy well-known for its
            effectiveness. It’s a personalization strategy that enables marketers to send out
            location-based push notifications that are very contextual and give strong incentives
            for subscribers to act on them.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="toc" aria-labelledby="toc-title">
          <div className="toc__header">
            <h2 id="toc-title">Table of Contents</h2>
            <button
              className="toc__toggle"
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          </div>
          <ol className={`toc__list${isExpanded ? " toc__list--expanded" : ""}`}>
            <li>
              <a href="#what-is-geolocation">
                What is Geolocation or Location-Based Push Notification?
              </a>
            </li>
            <li>
              <a href="#geotargeting">Geotargeting</a>
            </li>
            <li>
              <a href="#geofencing">Geofencing</a>
            </li>
            <li>
              <a href="#benefits">
                Benefits of Using Location-Based Notifications in Customer Messaging Strategy
              </a>
            </li>
            <li>
              <a href="#high-efficiency">High Efficiency</a>
            </li>
            <li>
              <a href="#engagement">Enhanced Engagement Rates</a>
            </li>
            <li>
              <a href="#roi">Improved ROI</a>
            </li>
            <li>
              <a href="#insights">New Insights Available</a>
            </li>
            <li>
              <a href="#tips">Tips and Best Practices to Set Up Your First Location-Based Campaign</a>
            </li>
            <li>
              <a href="#timing">Specify When To Send The Notification</a>
            </li>
            <li>
              <a href="#custom-links">Attach Custom Links</a>
            </li>
            <li>
              <a href="#rich-media">Use Rich Media</a>
            </li>
            <li>
              <a href="#creative-cases">
                3 Creative Cases of Location-Based Push Notification Campaigns
              </a>
            </li>
            <li>
              <a href="#sephora">Sephora’s Airport Push Notifications</a>
            </li>
            <li>
              <a href="#sunshine">Sunshine Personalized Weather Updates</a>
            </li>
            <li>
              <a href="#starbucks">Starbucks Happy Hour</a>
            </li>
            <li>
              <a href="#conclusion">Conclusion</a>
            </li>
          </ol>
        </section>

        <section className="card" id="what-is-geolocation">
          <h2>What is Geolocation or Location-Based Push Notification?</h2>
          <p>
            Geolocation or location-based push notifications are messages sent specifically to
            where the person is currently located. Depending on their type, location-based alerts
            can be viewed on mobile devices, or desktops as well.
          </p>
        </section>

        <section className="card" id="geotargeting">
          <h3>Geotargeting</h3>
          <p>
            Geotargeting is a general term to describe location-based push notifications.
            Geotargeting can use the zip code of the home address, or target a city, a country, etc.
            This strategy uses existing segments of your customer data to deliver your messages to
            geographically relevant users.
          </p>
          <p>
            Geotargeting can be a great tool if you, for example, have a brick-and-mortar location
            and want to promote it in the local territory or you are an online business having a
            country-specific holiday sale. One thing to remember is that this method does not target
            the real-time location.
          </p>
        </section>

        <section className="card" id="geofencing">
          <h3>Geofencing</h3>
          <p>
            Geofencing is another type of geotargeting, and it, on the other hand, is used for
            real-time location targeting. As the name suggests, geofence push notifications target
            people located within the boundaries or “fences” of a certain region. Geofencing works
            on GPS data from users’ devices, triggering push notifications once the people are in
            your targeted territory.
          </p>
          <p>
            Through geofencing, you can present very specific, narrow-down information to a segment
            of customers, who at that moment are most likely to act on it. The example of a café that
            targeted Adam with their lunch deals is an example of effective geofencing.
          </p>
        </section>

        <section className="card" id="benefits">
          <h2>Benefits of Using Location-Based Notifications in Customer Messaging Strategy</h2>
          <p>
            Whether you want to deliver a discounted offer for people living near your physical
            store or offer free shipping to orders from neighboring countries, location-based push
            notifications can become an effective part of your messaging strategy when you want to
            engage potential or existing customers.
          </p>
          <p>Here are a few undeniable benefits of location-based notifications for your brand.</p>

          <div className="card__grid">
            <article className="card__item" id="high-efficiency">
              <h3>High Efficiency</h3>
              <p>
                The more targeted the message, the better the result. Location-based notifications
                allow for very nuanced segmentation, helping to design campaigns that are highly
                relevant. Understanding users’ needs increases the effectiveness of your push
                notifications significantly while helping you reduce your campaign spending.
              </p>
            </article>
            <article className="card__item" id="engagement">
              <h3>Enhanced Engagement Rates</h3>
              <p>
                The high efficiency of push notifications doesn’t come alone but brings enhanced
                engagement rates. Since the main strength of location-based notifications is their
                nuanced targeting, if managed properly, they can be highly relevant to recipients.
              </p>
            </article>
            <article className="card__item" id="roi">
              <h3>Improved ROI</h3>
              <p>
                Push notifications boast a 3500% ROI, a result that’s a combination of the
                effectiveness and affordability of this channel. This is also the case for
                location-based push notifications because you’re spending budget on customers more
                likely to act.
              </p>
            </article>
            <article className="card__item" id="insights">
              <h3>New Insights Available</h3>
              <p>
                Through a detailed study of your campaign analytics, you’ll get insights into which
                territories yield better results, what is the best time to send out your
                notifications, and which customer segment is more interested.
              </p>
            </article>
          </div>
        </section>

        <section className="card" id="tips">
          <h2>Tips and Best Practices to Set Up Your First Location-Based Campaign</h2>
          <p>
            Now that we know how location-based push notifications can help improve your business
            outcomes, you might be tempted to set up your first location-based campaign. But before
            you start, there are a few tips and best practices that you’ll need to consider to
            ensure your subscribers have a positive experience.
          </p>

          <article id="timing">
            <h3>Specify When To Send The Notification</h3>
            <p>
              The timing of your push notifications plays a crucial role in their success. Plan
              ahead when you are going to send the notifications. In the case of geotargeting,
              consider time zones and deliver messages when they are most likely to be read.
            </p>
            <p>
              For geofencing, you need to determine when the user comes in contact with your
              notification. This can be done upon entry, during the dwelling, and close to the
              exit.
            </p>
            <ul>
              <li>
                <strong>Entry and dwelling:</strong> Send a notification when a subscriber just
                entered the territory or has already spent some time there.
              </li>
              <li>
                <strong>Exit:</strong> Send notifications when the person is about to exit the
                “fenced” territory for feedback or post-visit credits.
              </li>
            </ul>
          </article>

          <article id="custom-links">
            <h3>Attach Custom Links</h3>
            <p>
              Another thing you need to specify is where the recipient is redirected once they
              click on your message. Attach a custom link that redirects recipients to a relevant
              website or landing page where they can learn more about your offer.
            </p>
          </article>

          <article id="rich-media">
            <h3>Use Rich Media</h3>
            <p>
              Texts that include emojis, gifs, or visuals are known as rich push notifications.
              These visuals give the user an idea of what the message is about even before they read
              it while making the alert more fun and engaging.
            </p>
          </article>
        </section>

        <section className="card" id="creative-cases">
          <h2>3 Creative Cases of Location-Based Push Notification Campaigns</h2>
          <p>
            Having a large scope of personalization and impressively precise targeting,
            location-based push notifications offer immense opportunities for the growth of brands.
            Here are a few ideas if you are looking for some inspiration.
          </p>

          <div className="cases">
            <article className="case" id="sephora">
              <h3>Sephora’s Airport Push Notifications</h3>
              <p>
                The beauty retailer Sephora uses geofencing at the airports where they have a
                physical location. The timing, the location, and the content of the messages are
                spot-on, bringing the “right place, right time” to a whole new level.
              </p>
              <div className="case__note">Sephora push notification example</div>
            </article>

            <article className="case" id="sunshine">
              <h3>Sunshine Personalized Weather Updates</h3>
              <p>
                Sunshine is a weather app. Instead of simply reporting the weather, it adds sweet
                personalized notes adjusted to recipients’ tastes: one user will receive a “You’ll
                feel cold,” while for someone else, it’ll be an “It’s a nice day,” depending on
                their preferences.
              </p>
              <div className="case__note">Sunshine push notification example</div>
            </article>

            <article className="case" id="starbucks">
              <h3>Starbucks Happy Hour</h3>
              <p>
                Starbucks uses geofencing to drive sales. When users are in the nearby area or cross
                the store, the coffee giant sends them a notification about happy hour deals or other
                promotions to get customers through the door.
              </p>
              <div className="case__note">Starbucks push notification example</div>
            </article>
          </div>
        </section>

        <section className="card" id="conclusion">
          <h2>Conclusion</h2>
          <p>
            Location-based push notifications can be a hyper-effective tool in every marketer’s
            arsenal. These tips and ideas can become a good jumping-off point if you want to give
            them a go, and see how they work for your brand. Keep these best practices in mind, but
            also be ready to test and experiment.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Built for the LocaNotify project.</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
