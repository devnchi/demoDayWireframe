function zodiac() {
  let birthmonth = document.getElementById("month").value;
  let birthday = document.getElementById("day").value;
  let result = "Please enter a valid birthdate to get your result.";


    if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18) {
        result = ("Aquarius");
        document.getElementById("photo").innerHTML="<img src=/images/horoscopes/aquariusclip.png>";
        document.getElementById("characteristic").innerHTML="Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they're a fixed sign, they may not necessarily believe they are the 'same' people they were when they were born. Aquarians have a strong sense of social justice and making the world a better place, and see themselves as just one link in an endless human chain. They are very concerned about others, not because of how others treat them or how they want others to treat them.";
    }

    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3 && birthday <= 20) {
       result = ("Pisces");
       document.getElementById("photo").innerHTML="<img src=/images/horoscopes/piscesclip.png>";
       document.getElementById("characteristic").innerHTML="Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces 'knows' things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces? Pisces are sensitive, and get along well in small groups of people. Sometimes, a Pisces may feel like they have an internal and external self, and they may need to spend a lot of time solo to recalibrate those two halves of themselves. A Pisces is rarely lonely when they are by themselves, and have an active imagination. Creative, Pisces love spending time reading, exploring or creating art or music, and understanding their emotions through art.";
    }

   if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19) {
       result = ("Aries");
      document.getElementById("photo").innerHTML="<img src=/images/horoscopes/aries-clipart.png>";
      document.getElementById("characteristic").innerHTML="The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they'll have a friend for life. An Aries will always tell you what they're thinking, with a frankness that may occasionally border on rudeness. But even if an Aries seems overly blunt with their opinion, that's only because Rams value honesty above all else. And it works both ways. While an Aries may be the first to say if they think that you just phoned in a project, they'll also be the first to compliment you for a job well done. Rams may also have a short fuse. That fiery temper can be an asset. When an Aries is angry, they'll never play the passive-aggressive card. But for people who don't know them well, their temper can be a turn off. Learning how to work out their anger—whether by going to the gym every day, taking some deep breaths, or learning to chill before they Tweet their thoughts to the world—is a lifelong process for Rams.";
   }

    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20) {
        result = ("Taurus");
       document.getElementById("photo").innerHTML="<img src=/images/horoscopes/taurus-clipart.png>";
       document.getElementById("characteristic").innerHTML="Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart. With a rep as one of the hardest-working signs in the Zodiac, a Bull is never afraid to roll up those sleeves and get to work, and won't blink an eye at pulling an all-nighter to get the job done. But it's not all work for Taurus. Anchored by the earth, this passionate sign is all about sensuality, and is always seeking out pleasure. Whether they're indulging in luxurious massages, spending hours in bed with their lover, or going on a long run, Taureans love feeling present in their body and frequently need to get in touch with their physical self.";
    }

    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20) {
        result = ("Gemini");
       document.getElementById("photo").innerHTML="<img src=/images/horoscopes/geminiclip.png>";
       document.getElementById("characteristic").innerHTML="Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs. Energetic and quick-witted, Gemini never gets stuck in the past and doesn't ruminate on what might have been. Instead, they move forward with glass-half-full optimism and an ability to always look on the bright side—and land on their feet—in nearly any situation. With a mind that's constantly racing, even when they're just quietly hanging out, the Twins never get bored. In fact, Gemini are happy keeping their own company, and can often turn their solitary daydreams into reality.";
    }

    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22) {
        result = ("Cancer");
       document.getElementById("photo").innerHTML="<img src=/images/horoscopes/cancer-clipart.png>";
       document.getElementById("characteristic").innerHTML="Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancers may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life. Most Cancers have been called psychic at some point, and with good reason—Cancer can often intuit relationships, ideas, and motivations before anyone has actually spoken. That can make for challenging interactions with this sign—Cancer hates small talk, especially when it contains white lies (like saying, 'How nice to see you!' when it's clear that both parties would rather avoid each other). That's why social gatherings can be overwhelming for Cancers. They'd much rather spend time in small groups where everyone is on the same page.";
    }

    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22) {
        result = ("Leo");
       document.getElementById("photo").innerHTML="<img src=/images/leo-clipart.png>";
       document.getElementById("characteristic").innerHTML="Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader. But it's not all hard work for Lions. Intense and energetic, Leos thrive on social interactions and have no problem making friends—although pinning them down to spend time with you is another story. Leos put themselves first, and will turn down a plan that doesn't fit with their agenda or idea of fun. This trait has gained them an unfair reputation for arrogance. But on the flip side, when a Lion chooses to spend time with you, it's genuinely because he or she wants to.";
    }

    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22) {
        result = ("Virgo");
       document.getElementById("photo").innerHTML="<img src=/images/horoscopes/virgo-clip-art.png>";
       document.getElementById("characteristic").innerHTML="Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure. Virgo has a rich inner life, and can sometimes seem shy at first meeting. A Virgo won't spill secrets right away, and it's important to earn a Virgo's trust. But once you do, that Virgin will be a friend for life. And if you think that you're dating a shy Virgo, trust that those walls will fall down in the bedroom. One of the most passionate signs, Virgos specialize at connecting to their physicality, and this earth sign loves and celebrates physical connection with their partner.";
    }

    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22) {
      result = ("Libra");
       document.getElementById("photo").innerHTML="<img src=/images/libra-clipart.png>";
       document.getElementById("characteristic").innerHTML="Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count. An air sign, Libra can often be 'up in the clouds,' and while he or she is amazing at making big plans, follow through can be tricky. Working with detail-oriented signs, like Virgos or Capricorns, can help Libras actually manifest their dreams into reality, especially in the workspace. But don't call out Librans for daydreaming—their imagination is one of their biggest assets, and they often put their imagination to work by finding careers in the arts or in literature.";
    }

    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21) {
       result = ("Scorpio");
       document.getElementById("photo").innerHTML="<img src=/images/horoscopes/scorpioclip.png>";
       document.getElementById("characteristic").innerHTML="Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty. Because of all of these traits, a Scorpio can seem intimidating and somewhat closed off to those who don't know them well. But what people don't realize is that even though Scorpio may seem brusque, as a water sign, they also are very in tune with their emotions, and sometimes may find themselves caught up in their feelings. This leads to Scorpio's central conflict: Their feelings are what drives them and strengthens them, but their mutability can scare them and make them feel vulnerable and out of control. Because of this conflict, Scorpios, like their namesake, the scorpion, put up an outer shell and may seem prickly.";
    }

    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21) {
        result = ("Sagittarius");
       document.getElementById("photo").innerHTML="<img src=/images/horoscopes/saggclip.png>";
       document.getElementById("characteristic").innerHTML="Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie. Sagittarius is open-hearted, generous, and big-spirited, but Sagittarius is always truthful. Because of this, they may hurt others’ feelings, or may be called out for not having tact or empathy. The latter is not true. With their keen imagination, Sagittarius is adept at putting themselves in another person’s shoes—that’s why so many Sagittarius are successful actors—but they do not feel the need to beat around the bush or lie. You can trust a Sagittarius to tell you what they really think. You can also trust a Sagittarius, period. Unlike other signs, they won’t spill any secrets.";
    }

    if (birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19) {
        result = ("Capricorn");
     document.getElementById("photo").innerHTML="<img src=/images/horoscopes/capricornclip.png>";
     document.getElementById("characteristic").innerHTML="Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave. Natural rule-followers, Capricorns thrive on order and love strict rules, hierarchies, and set ways to do things. Can a Capricorn think outside the box? Yes, they can, but they prefer when they have strict boundaries to constrain against—free reign can make them feel paralyzed by choice. Capricorns are great at climbing the corporate ladder, and especially adept at making (and investing) money. Capricorns love family, and put a lot of stock in traditions. A Capricorn might stress themselves out trying to do everything perfectly—a Capricorn may feel like they must present a home-cooked meal every day, and would never admit to doing drive-thru or takeout. Capricorns believe presentation is everything, and their homes are usually Insta-worthy. A Capricorn sometimes is overly focused on what things look like, instead of how things feel, which could cause them to feel stifled and unhappy.";
    }
    else if (birthmonth>12||birthday>31){
       alert("You entered an invalid birthdate!");
    }
 document.getElementById("result").innerHTML= result;
}
