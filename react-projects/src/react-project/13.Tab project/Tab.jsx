import React, { useState } from "react";
import "./Tab.css";
const tabData = [
  {
    id: "history",
    title: "history",
    content: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun
        mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
        rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard
        tilde try-hard, woke fixie banjo man bun. Small batch tumeric
        mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
        direct trade hoodie ugh chambray, craft beer pork belly flannel
        tacos single-origin coffee art party migas plaid pop-up.`
  },
  {
    id: "vision",
    title: "vision",
    content: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
        crucifix offal deep v hella biodiesel. Church-key listicle
        polaroid put a bird on it chillwave palo santo enamel pin,
        tattooed meggings franzen la croix cray. Retro yr aesthetic four
        loko tbh helvetica air plant, neutra palo santo tofu mumblecore.
        Hoodie bushwick pour-over jean shorts chartreuse shabby chic.
        Roof party hammock master cleanse pop-up truffaut, bicycle
        rights skateboard affogato readymade sustainable deep v
        live-edge schlitz narwhal.`
  },
  {
    id: "goals",
    title: "goals",
    content: `Chambray authentic truffaut, kickstarter brunch taxidermy vape
        heirloom four dollar toast raclette shoreditch church-key.
        Poutine etsy tote bag, cred fingerstache leggings cornhole
        everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
        swag, mixtape hashtag marfa readymade direct trade man braid
        cold-pressed roof party. Small batch adaptogen coloring book
        heirloom. Letterpress food truck hammock literally hell of wolf
        beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
        banh mi salvia venmo photo booth quinoa chicharrones.`
  }
];

const Tab = () => {
  const [active, setActive] = useState("history");

  return (
    <div className="section-center">
      <article className="tab">
        <div className="btn-container">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${active === tab.id ? "active" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.title.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="content-container">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className={`content ${active === tab.id ? "active" : ""}`}
            >
              <h4>{tab.title}</h4>
              <p>{tab.content}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Tab;
