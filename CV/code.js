var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    fin: {
        title: "Mikael Kolehmainen - Ansioluettelo",
        profession: "Opiskelija",
        skills: "Taidot",
        social: "Sosiaalit",
        about: "Minusta",
        aboutText: "Tervetuloa ansioluetteloni, tällä sivustolla on kaikki vuosien varella saaneet ansiot. Olen hyvin työläs ja ahkera luontestani. Olen myös valmis ottaman suuria haasteita ja tehdä töitä ahkerasti, tästä ansioluettelosta näet kaikki taitoni eri aloissa.",
        experience: "Työkokemus",
        date_1: "12.10.2018",
        WPP: "Työelämään tutustuminen - TET",
        WPPText: "Olin vahtimestarina Gesterbyn koulussa kellon ajat 9:00 - 11:30. Työtehtäväni olivat seuraavat tyhjentää roskakorit, vastaanottaa koulun postit ja vartioida koulun käytäviä. Työnantajani(Kari Martiskainen) kommentit: \"Kohtelias, kiinnostunut ja yhteistyö sujui hyvin. Kiitos!\"",
        WPPText_2: "Olin myös siivooja Gesterbyn koulussa kellon ajat 12 - 14:30. Työtehtäväni olivat seuraavat siivota koulun luokkahuoneet ja käytävät. Työnantajani(Pom Pattamai Hinom) kommentit: \"positiivinen, haluaa oppia uusia asioita, kuuntelee tarkasti, ystävällinen ja reippaasti tekee töitä."
    },
    sve: {
        title: "Mikael Kolehmainen - CV",
        profession: "Elev",
        skills: "Färdigheter",
        social: "Sociala",
        about: "Om mig",
        aboutText: "Välkommen till min CV, på den här sidan finns allting jag har åstadkommit under åren. Jag är väldigt arbetsam och flitig. Jag är också färdig att ta stora utmaningar och arbeta flitigt, från denna CV ser du alla mina färdigheter i olika branscher.",
        experience: "Arbetserfarenhet",
        date_1: "12.10.2018",
        WPP: "Praktisk arbetslivsorientering - PRAO",
        WPPText: "Jag var vaktmästare i Gesterbyn koulu mellan 9 och 11:30. Tömma skräpkorgarna, ta emot skolans post och vakta skolans korridorer var mina arbetsuppgifter. Min arbetsgivare(Kari Martiskainen) kommentarer: \"Kohtelias, kiinnostunut ja yhteistyö sujui hyvin. Kiitos!\", på svenska: artig, intresserad och samarbetet for bra. Tack!",
        WPPText_2: "Jag var också en städerska o"
    },
    eng: {
        title: "Mikael Kolehmainen - CV",
        profession: "Student",
        skills: "Skills",
        social: "Socials",
        about: "About me",
        aboutText: "Welcome to my CV, on this site are all my achievements that I accomplished throughout the years. I'm hard-working and assiduous. I'm also ready to take huge challenges and work diligently, from this CV you can see all my skills in different lines of work.",
        experience: "Work experience",
        date_1: "10/12/2018",
        WPP: "Work practice program",
        WPPText: "I was a porter in Gesterbyn koulu from 9 AM to 11:30 AM. My work assignments were to empty the trashcans, receive the schools mail and guard the schools corridors. My employer(Kari Martiskainen) comments: \"Kohtelias, kiinnostunut ja yhteistyö sujui hyvin\", on English: polite, interested and liaison went well. Thanks!",
    }
};

    if (window.location.hash) {
        if (window.location.hash === "#sve") {
            profession.textContent = language.sve.profession;
            title.textContent = language.sve.title;
            skills.textContent = language.sve.skills;
            social.textContent = language.sve.social;
            about.textContent = language.sve.about;
            aboutText.textContent = language.sve.aboutText;
            experience.textContent = language.sve.experience;
            date_1.textContent = language.sve.date_1;
            WPP.textContent = language.sve.WPP;
            WPPText.textContent = language.sve.WPPText;
        } else if (window.location.hash === "#eng") {
            profession.textContent = language.eng.profession;
            title.textContent = language.eng.title;
            skills.textContent = language.eng.skills;
            social.textContent = language.eng.social;
            about.textContent = language.eng.about;
            aboutText.textContent = language.eng.aboutText;
            experience.textContent = language.eng.experience;
            date_1.textContent = language.eng.date_1;
            WPP.textContent = language.eng.WPP;
            WPPText.textContent = language.eng.WPPText;
        }
    }

    for (i = 0; i <= dataReload.length; i++) {
        dataReload[i].onclick = function() {
            setTimeout(function () {
                location.reload();
              }, 100);
        };
    }