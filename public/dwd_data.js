function generateUrl(episode) {
  const ytUrl = "https://www.youtube.com"
  return `${ytUrl}${episode.url}\&list=PLPV88C9y83a5Re442_4LlAY8sSKu4HVYE\&index=${episode.num}`
}
function generateWikiUrl(episode) {
  // Regular expression to match three consecutive digits
  const regex = /\d{3}/g;
  
  // Find all matches in the string
  const matches = episode.title.match(regex);
  if (matches) {
    // Convert each match to a number
    const numbers = matches.map(match => parseInt(match, 10));
    
    return `https://regalgoblins.fandom.com/wiki/Dicing_with_Death:_Episode_${numbers[0]}`
  } else {
    console.log("No matches found.");
    return "#regexError"
  }
}
episodes = [
  {
    "title": "Character Building for new D&D Campaign (Audio problems in the beginning)",
    "num": 1,
    "url": "/watch?v=jXSHe90X7mo"
  },
  {
    "title": "Dicing with Death: 001 Part 1",
    "num": 2,
    "url": "/watch?v=S0NtEZpBfjA"
  },
  {
    "title": "Dicing with Death: 001 Part 2",
    "num": 3,
    "url": "/watch?v=d-gSnDzYVOs"
  },
  {
    "title": "Dicing with Death: 001 Part 3",
    "num": 4,
    "url": "/watch?v=LBPyf8fzEDI"
  },
  {
    "title": "Dicing with Death: 002 Part 1",
    "num": 5,
    "url": "/watch?v=9caCbmWi9Io"
  },
  {
    "title": "Dicing with Death: 002 Part 2",
    "num": 6,
    "url": "/watch?v=UgFt6OF0JIQ"
  },
  {
    "title": "Dicing with Death: 002 Part 3",
    "num": 7,
    "url": "/watch?v=2VsKeu5MBJE"
  },
  {
    "title": "Dicing with Death: 002 Part 4",
    "num": 8,
    "url": "/watch?v=EayQSYU9Y-c"
  },
  {
    "title": "Dicing with Death: 003 Part 1",
    "num": 9,
    "url": "/watch?v=USuNMqg0ZSM"
  },
  {
    "title": "Dicing with Death: 003 Part 2",
    "num": 10,
    "url": "/watch?v=ByoPYJOdIPg"
  },
  {
    "title": "Dicing with Death: 003 Part 3",
    "num": 11,
    "url": "/watch?v=eb6aQNiKBxs"
  },
  {
    "title": "Dicing with Death: 003 Part 4",
    "num": 12,
    "url": "/watch?v=0awulqaylMo"
  },
  {
    "title": "Dicing with Death: 004 Part 1",
    "num": 13,
    "url": "/watch?v=I90oLmKEu0E"
  },
  {
    "title": "Dicing with Death: 004 Part 2",
    "num": 14,
    "url": "/watch?v=YpjvDzrXRQs"
  },
  {
    "title": "Dicing with Death: 005 Part 1",
    "num": 15,
    "url": "/watch?v=BTarsmcoJJE"
  },
  {
    "title": "Dicing with Death: 005 Part 2",
    "num": 16,
    "url": "/watch?v=r1a_vvcTgEQ"
  },
  {
    "title": "Dicing with Death: 005 Part 3",
    "num": 17,
    "url": "/watch?v=kaUydCWOa6U"
  },
  {
    "title": "Dicing with Death: 005 Part 4",
    "num": 18,
    "url": "/watch?v=b6ZWbaOwTnk"
  },
  {
    "title": "Dicing with Death: 006 Part 1",
    "num": 19,
    "url": "/watch?v=ztLbLIaOHO8"
  },
  {
    "title": "Dicing with Death: 006 Part 2",
    "num": 20,
    "url": "/watch?v=3ifv3asNSOs"
  },
  {
    "title": "Dicing with Death: 006 Part 3",
    "num": 21,
    "url": "/watch?v=hmc5P5PLog0"
  },
  {
    "title": "Dicing with Death: 006 Part 4",
    "num": 22,
    "url": "/watch?v=3UDVEkV5WXQ"
  },
  {
    "title": "Dicing with Death: 007 Part 1",
    "num": 23,
    "url": "/watch?v=CXueiG2hi3U"
  },
  {
    "title": "Dicing with Death: 007 Part 2",
    "num": 24,
    "url": "/watch?v=9kJJ2LSt9WQ"
  },
  {
    "title": "Dicing with Death: 007 Part 3",
    "num": 25,
    "url": "/watch?v=nDBtjsHEJss"
  },
  {
    "title": "Dicing with Death: 007 Part 4",
    "num": 26,
    "url": "/watch?v=yXQDcLhE9DQ"
  },
  {
    "title": "Dicing with Death: 008 Part 1",
    "num": 27,
    "url": "/watch?v=QIVAflhvMKM"
  },
  {
    "title": "Dicing with Death: 008 Part 2",
    "num": 28,
    "url": "/watch?v=Wm5gsWR2LhE"
  },
  {
    "title": "Dicing with Death: 008 Part 3",
    "num": 29,
    "url": "/watch?v=mC7_WhUd5jQ"
  },
  {
    "title": "Dicing with Death: 008 Part 4",
    "num": 30,
    "url": "/watch?v=QYvNUFuMxa4"
  },
  {
    "title": "Dicing with Death: 009 Part 1",
    "num": 31,
    "url": "/watch?v=aeyjPaHcfoI"
  },
  {
    "title": "Dicing with Death: 009 Part 2",
    "num": 32,
    "url": "/watch?v=D3Ey0QY2_Y4"
  },
  {
    "title": "Dicing with Death: 009 Part 3",
    "num": 33,
    "url": "/watch?v=dMVo6nsf2uU"
  },
  {
    "title": "Dicing with Death: 009 Part 4",
    "num": 34,
    "url": "/watch?v=eG-FuKupAqw"
  },
  {
    "title": "Dicing with Death: 010 Part 1",
    "num": 35,
    "url": "/watch?v=nV6ZjEvhrqA"
  },
  {
    "title": "Dicing with Death: 010 Part 2",
    "num": 36,
    "url": "/watch?v=O0f1ZIQXVW4"
  },
  {
    "title": "Dicing with Death: 010 Part 3",
    "num": 37,
    "url": "/watch?v=6qNB4p2fmro"
  },
  {
    "title": "Dicing with Death: 011 Part 1",
    "num": 38,
    "url": "/watch?v=IP4dfF-OZU0"
  },
  {
    "title": "Dicing with Death: 011 Part 2",
    "num": 39,
    "url": "/watch?v=YvUg_GBza6M"
  },
  {
    "title": "Dicing with Death: 011 Part 3",
    "num": 40,
    "url": "/watch?v=IGtacKb-KqI"
  },
  {
    "title": "Dicing with Death: 011 Part 4",
    "num": 41,
    "url": "/watch?v=GqVngAAiwjM"
  },
  {
    "title": "Dicing with Death: 011 Part 5",
    "num": 42,
    "url": "/watch?v=untibsDE9Lg"
  },
  {
    "title": "Dicing with Death: 012 Part 1",
    "num": 43,
    "url": "/watch?v=7OpogN9-Ad4"
  },
  {
    "title": "Dicing with Death: 012 Part 2",
    "num": 44,
    "url": "/watch?v=WcuWqLGi2SY"
  },
  {
    "title": "Dicing with Death: 012 Part 3",
    "num": 45,
    "url": "/watch?v=IskfZLFOHDM"
  },
  {
    "title": "Dicing with Death: 012 Part 4",
    "num": 46,
    "url": "/watch?v=h-kU26bWAAo"
  },
  {
    "title": "D&D OP: Character making",
    "num": 47,
    "url": "/watch?v=0USEb45I85E"
  },
  {
    "title": "D&D OP: THE ARENA OF DEATH",
    "num": 48,
    "url": "/watch?v=-2KkPrJW8Rs"
  },
  {
    "title": "Dicing with Death: 013 Part 1",
    "num": 49,
    "url": "/watch?v=o6OA2Hi244I"
  },
  {
    "title": "Dicing with Death: 013 Part 2",
    "num": 50,
    "url": "/watch?v=TS_UUL2TLlM"
  },
  {
    "title": "Dicing with Death: 013 Part 3",
    "num": 51,
    "url": "/watch?v=DL0_aO4wvXg"
  },
  {
    "title": "Dicing with Death: 013 Part 4",
    "num": 52,
    "url": "/watch?v=Hl6_wgWK4sI"
  },
  {
    "title": "Dicing with Death: 014 Part 1",
    "num": 53,
    "url": "/watch?v=85UOwWyfITg"
  },
  {
    "title": "Dicing with Death: 014 Part 2",
    "num": 54,
    "url": "/watch?v=XI1GmD6j2d4"
  },
  {
    "title": "Dicing with Death: 014 Part 3",
    "num": 55,
    "url": "/watch?v=glnLUnqI3mk"
  },
  {
    "title": "Dicing with Death: 014 Part 4",
    "num": 56,
    "url": "/watch?v=4X-zIYtt7Xo"
  },
  {
    "title": "Dicing with Death: 015 Part 1",
    "num": 57,
    "url": "/watch?v=QLCe8UCi4Nk"
  },
  {
    "title": "Dicing with Death: 015 Part 2",
    "num": 58,
    "url": "/watch?v=Y7Sz6V1gUNA"
  },
  {
    "title": "Dicing with Death: 015 Part 3",
    "num": 59,
    "url": "/watch?v=qHaCsZQ6Mto"
  },
  {
    "title": "Dicing with Death: 015 Part 4",
    "num": 60,
    "url": "/watch?v=ApoXPGG9SnU"
  },
  {
    "title": "Dicing with Death: 016 Part 1",
    "num": 61,
    "url": "/watch?v=7DE1aRBEPhI"
  },
  {
    "title": "Dicing with Death: 016 Part 2",
    "num": 62,
    "url": "/watch?v=raKAguw48kU"
  },
  {
    "title": "Dicing with Death: 016 Part 3",
    "num": 63,
    "url": "/watch?v=9xFXjeSZix0"
  },
  {
    "title": "Dicing with Death: Koibu talks about Qualneer",
    "num": 64,
    "url": "/watch?v=dxPtN15FZKM"
  },
  {
    "title": "Dicing with Death: 017 Part 1",
    "num": 65,
    "url": "/watch?v=0js0B8C7IAo"
  },
  {
    "title": "Dicing with Death: 017 Part 2",
    "num": 66,
    "url": "/watch?v=q2teq3yEHLo"
  },
  {
    "title": "Dicing with Death: 017 Part 3",
    "num": 67,
    "url": "/watch?v=vq4EHg7jR0k"
  },
  {
    "title": "Dicing with Death: 018 Part 1",
    "num": 68,
    "url": "/watch?v=kbE0wChUsH0"
  },
  {
    "title": "Dicing with Death: 018 Part 2",
    "num": 69,
    "url": "/watch?v=XciaYMePcPA"
  },
  {
    "title": "Dicing with Death: 018 Part 3",
    "num": 70,
    "url": "/watch?v=V77rHnMHfDM"
  },
  {
    "title": "Dicing with Death: 018 Part 4",
    "num": 71,
    "url": "/watch?v=RxaYDM0V9Ik"
  },
  {
    "title": "Dicing with Death: 019 Part 1",
    "num": 72,
    "url": "/watch?v=_TJRiAnC6tw"
  },
  {
    "title": "Dicing with Death: 019 Part 2",
    "num": 73,
    "url": "/watch?v=vT-pM2bL9Ik"
  },
  {
    "title": "Dicing with Death: 019 Part 3",
    "num": 74,
    "url": "/watch?v=pGae-_dMTUc"
  },
  {
    "title": "Dicing with Death: 019 Part 4",
    "num": 75,
    "url": "/watch?v=K2UQ5HCgoRk"
  },
  {
    "title": "Dicing with Death: 020 Part 1",
    "num": 76,
    "url": "/watch?v=InMM8fMNzj4"
  },
  {
    "title": "Dicing with Death: 020 Part 2",
    "num": 77,
    "url": "/watch?v=LFJvh9d1zRQ"
  },
  {
    "title": "Dicing with Death: 020 Part 3",
    "num": 78,
    "url": "/watch?v=vSa0r8X3-Ro"
  },
  {
    "title": "Dicing with Death: 020 Part 4",
    "num": 79,
    "url": "/watch?v=A95AVea17B0"
  },
  {
    "title": "Dicing with Death: 021 Part 1",
    "num": 80,
    "url": "/watch?v=FjtA31BkcNA"
  },
  {
    "title": "Dicing with Death: 021 Part 2",
    "num": 81,
    "url": "/watch?v=QniSw0k8k1s"
  },
  {
    "title": "Dicing with Death: 021 Part 3",
    "num": 82,
    "url": "/watch?v=2Kq6Bc-ZiyA"
  },
  {
    "title": "Dicing with Death: 021 Part 4",
    "num": 83,
    "url": "/watch?v=YZ9vzVD0b6U"
  },
  {
    "title": "Dicing with Death: 022 Part 1",
    "num": 84,
    "url": "/watch?v=is7KC-UxWAI"
  },
  {
    "title": "Dicing with Death: 022 Part 2",
    "num": 85,
    "url": "/watch?v=Aj873jjI9bs"
  },
  {
    "title": "Dicing with Death: 022 Part 3",
    "num": 86,
    "url": "/watch?v=wR3hVdF5RqA"
  },
  {
    "title": "Dicing with Death: 022 Part 4",
    "num": 87,
    "url": "/watch?v=zaGALKjgYl8"
  },
  {
    "title": "Dicing with Death: 023 Part 1",
    "num": 88,
    "url": "/watch?v=tKHn7KrX8zc"
  },
  {
    "title": "Dicing with Death: 023 Part 2",
    "num": 89,
    "url": "/watch?v=pG_4_2nh9pk"
  },
  {
    "title": "Dicing with Death: 023 Part 3",
    "num": 90,
    "url": "/watch?v=_Nhai8fYtFk"
  },
  {
    "title": "Dicing with Death: 023 Part 4",
    "num": 91,
    "url": "/watch?v=cPl-7mDMmjk"
  },
  {
    "title": "Dicing with Death: 024 Part 1",
    "num": 92,
    "url": "/watch?v=MJ2nEtGLAfY"
  },
  {
    "title": "Dicing with Death: 024 Part 2",
    "num": 93,
    "url": "/watch?v=NDorVRDIohA"
  },
  {
    "title": "Dicing with Death: 024 Part 3",
    "num": 94,
    "url": "/watch?v=R6IWFV19mZ4"
  },
  {
    "title": "Dicing with Death: 024 Part 4",
    "num": 95,
    "url": "/watch?v=AXz973MM6x0"
  },
  {
    "title": "Dicing with Death: 025 Part 1",
    "num": 96,
    "url": "/watch?v=YjZWG0vrBz8"
  },
  {
    "title": "Dicing with Death: 025 Part 2",
    "num": 97,
    "url": "/watch?v=dLcfEjyHsE0"
  },
  {
    "title": "Dicing with Death: 026 Part 1",
    "num": 98,
    "url": "/watch?v=MDbZwNVaOeg"
  },
  {
    "title": "Dicing with Death: 026 Part 2",
    "num": 99,
    "url": "/watch?v=AFWbub8b5mI"
  },
  {
    "title": "Dicing with Death: 026 Part 3",
    "num": 100,
    "url": "/watch?v=OpvQC5OIZb4"
  },
  {
    "title": "Dicing with Death: 027 Part 1 - No Audio",
    "num": 101,
    "url": "/watch?v=U7_pr6_9HZ4"
  },
  {
    "title": "Dicing with Death: 027 Part 2",
    "num": 102,
    "url": "/watch?v=k4cJBn3OsPk"
  },
  {
    "title": "Dicing with Death: 027 Part 3",
    "num": 103,
    "url": "/watch?v=Ao62xMMOo-Q"
  },
  {
    "title": "Dicing with Death: 027 Part 4 - Broken Audio",
    "num": 104,
    "url": "/watch?v=1nPCqm9xbig"
  },
  {
    "title": "Dicing with Death: 028 Part 1",
    "num": 105,
    "url": "/watch?v=tGIGcydw79U"
  },
  {
    "title": "Dicing with Death: 028 Part 2",
    "num": 106,
    "url": "/watch?v=VbiYPg72EB8"
  },
  {
    "title": "Dicing with Death: 028 Part 3",
    "num": 107,
    "url": "/watch?v=Ge4pRVNZEy0"
  },
  {
    "title": "Dicing with Death: 029 Part 1",
    "num": 108,
    "url": "/watch?v=E4DTgfrfEb8"
  },
  {
    "title": "Dicing with Death: 029 Part 2",
    "num": 109,
    "url": "/watch?v=FYoslPE7zlo"
  },
  {
    "title": "Dicing with Death: 029 Part 3",
    "num": 110,
    "url": "/watch?v=PmAOQTGyYvI"
  },
  {
    "title": "Dicing with Death: 029 Part 4",
    "num": 111,
    "url": "/watch?v=5R3y5ZesuAM"
  },
  {
    "title": "Dicing with Death: 030 Part 1",
    "num": 112,
    "url": "/watch?v=d3kPyljTbsc"
  },
  {
    "title": "Dicing with Death: 030 Part 2",
    "num": 113,
    "url": "/watch?v=u6ingUkNCUg"
  },
  {
    "title": "Dicing with Death: 030 Part 3",
    "num": 114,
    "url": "/watch?v=G89_eBuA-10"
  },
  {
    "title": "Dicing with Death: 030 Part 4",
    "num": 115,
    "url": "/watch?v=-cXW020MPx4"
  },
  {
    "title": "Dicing with Death: 031 Part 1",
    "num": 116,
    "url": "/watch?v=0etTMQErJyI"
  },
  {
    "title": "Dicing with Death: 031 Part 2",
    "num": 117,
    "url": "/watch?v=CafvM6fn1XE"
  },
  {
    "title": "Dicing with Death: 031 Part 3",
    "num": 118,
    "url": "/watch?v=JzfCuYi4qTs"
  },
  {
    "title": "Dicing with Death: 032 Part 1",
    "num": 119,
    "url": "/watch?v=DVLVTLH6fuc"
  },
  {
    "title": "Dicing with Death: 032 Part 2",
    "num": 120,
    "url": "/watch?v=5gmoMbEmIio"
  },
  {
    "title": "Dicing with Death: 032 Part 3",
    "num": 121,
    "url": "/watch?v=y_kazkecoRo"
  },
  {
    "title": "Dicing with Death: 032 Part 4",
    "num": 122,
    "url": "/watch?v=zYTYFTCRf7M"
  },
  {
    "title": "Dicing with Death: 033 Part 1",
    "num": 123,
    "url": "/watch?v=_HMhteV4_CY"
  },
  {
    "title": "Dicing with Death: 033 Part 2",
    "num": 124,
    "url": "/watch?v=Hpr1nD5rp1w"
  },
  {
    "title": "Dicing with Death: 033 Part 3",
    "num": 125,
    "url": "/watch?v=3SIc3G4fb5Q"
  },
  {
    "title": "Dicing with Death: 033 Part 4",
    "num": 126,
    "url": "/watch?v=BczRiu2MpWw"
  },
  {
    "title": "Dicing with Death: 034 Part 1",
    "num": 127,
    "url": "/watch?v=ce7Vq2q1lg0"
  },
  {
    "title": "Dicing with Death: 034 Part 2",
    "num": 128,
    "url": "/watch?v=-vbTHStGtaA"
  },
  {
    "title": "Dicing with Death: 034 Part 3",
    "num": 129,
    "url": "/watch?v=9tV4jqUQOkk"
  },
  {
    "title": "Dicing with Death: 034 Part 4",
    "num": 130,
    "url": "/watch?v=rvYyE1agLQM"
  },
  {
    "title": "Dicing with Death: 035 Part 1",
    "num": 131,
    "url": "/watch?v=OAQBTDSHjuQ"
  },
  {
    "title": "Dicing with Death: 035 Part 2",
    "num": 132,
    "url": "/watch?v=92f04svb13s"
  },
  {
    "title": "Dicing with Death: 035 Part 3",
    "num": 133,
    "url": "/watch?v=_n42juNZYtc"
  },
  {
    "title": "Dicing with Death: 035 Part 4",
    "num": 134,
    "url": "/watch?v=YT-g0g1MJ34"
  },
  {
    "title": "Dicing with Death: 036 Part 1",
    "num": 135,
    "url": "/watch?v=tNRKw8DAgMA"
  },
  {
    "title": "Dicing with Death: 036 Part 2",
    "num": 136,
    "url": "/watch?v=Ut_xB0Dlpy8"
  },
  {
    "title": "Dicing with Death: 037 Part 1",
    "num": 137,
    "url": "/watch?v=HTIjx_GXHrM"
  },
  {
    "title": "Dicing with Death: 037 Part 2",
    "num": 138,
    "url": "/watch?v=esGxmnGUw9Y"
  },
  {
    "title": "Dicing with Death: 037 Part 3",
    "num": 139,
    "url": "/watch?v=rC6PkQe8-jE"
  },
  {
    "title": "Dicing with Death: 037 Part 4",
    "num": 140,
    "url": "/watch?v=IRTiCqbfjN0"
  },
  {
    "title": "DwD update!",
    "num": 141,
    "url": "/watch?v=glhtTQ3Z4WI"
  },
  {
    "title": "Dicing with Death: 038 Part 1",
    "num": 142,
    "url": "/watch?v=unm6OcTPywM"
  },
  {
    "title": "Dicing with Death: 038 Part 2",
    "num": 143,
    "url": "/watch?v=JmKuz53v7qo"
  },
  {
    "title": "Dicing with Death: 038 Part 3",
    "num": 144,
    "url": "/watch?v=eeXm6wOxefc"
  },
  {
    "title": "Dicing with Death: 038 Part 4",
    "num": 145,
    "url": "/watch?v=jnlovpIoz_U"
  },
  {
    "title": "Dicing with Death: 039 Part 1",
    "num": 146,
    "url": "/watch?v=fR9bKmMeeAQ"
  },
  {
    "title": "Dicing with Death: 039 Part 2",
    "num": 147,
    "url": "/watch?v=PEdxahi8aeQ"
  },
  {
    "title": "Dicing with Death: 039 Part 3",
    "num": 148,
    "url": "/watch?v=9H9ai7ShR2Y"
  },
  {
    "title": "Dicing with Death: 040 Part 1",
    "num": 149,
    "url": "/watch?v=5k4cA6kxmPY"
  },
  {
    "title": "Dicing with Death: 040 Part 2",
    "num": 150,
    "url": "/watch?v=sHIVjy4rAYY"
  },
  {
    "title": "Dicing with Death: 040 Part 3",
    "num": 151,
    "url": "/watch?v=vz9Bo42QPsE"
  },
  {
    "title": "Dicing with Death: 040 Part 4",
    "num": 152,
    "url": "/watch?v=75p-MrlYDkc"
  },
  {
    "title": "Dicing with Death: 041 Part 1",
    "num": 153,
    "url": "/watch?v=F0-yQryOUGE"
  },
  {
    "title": "Dicing with Death: 041 Part 2",
    "num": 154,
    "url": "/watch?v=VMSgxhgwVnI"
  },
  {
    "title": "Dicing with Death: 041 Part 3",
    "num": 155,
    "url": "/watch?v=JJGEdcf5imc"
  },
  {
    "title": "Dicing with Death: 041 Part 4",
    "num": 156,
    "url": "/watch?v=_d_8qcFVrp8"
  },
  {
    "title": "Dicing with Death: 042 Part 1",
    "num": 157,
    "url": "/watch?v=0E907ePyLbo"
  },
  {
    "title": "Dicing with Death: 042 Part 2",
    "num": 158,
    "url": "/watch?v=4kXY3fGoQAc"
  },
  {
    "title": "Dicing with Death: 042 Part 3",
    "num": 159,
    "url": "/watch?v=HgGM2LIo52s"
  },
  {
    "title": "Dicing with Death: 042 Part 4",
    "num": 160,
    "url": "/watch?v=ze0wyzwDaiw"
  },
  {
    "title": "Dicing with Death: 043 Part 1",
    "num": 161,
    "url": "/watch?v=rx2N8beSuZw"
  },
  {
    "title": "Dicing with Death: 043 Part 2",
    "num": 162,
    "url": "/watch?v=Sl7X4hGE3CQ"
  },
  {
    "title": "Dicing with Death: 043 Part 3",
    "num": 163,
    "url": "/watch?v=AFiYZt3koq4"
  },
  {
    "title": "Dicing with Death: 044 Part 1",
    "num": 164,
    "url": "/watch?v=BuR0aJAEZjI"
  },
  {
    "title": "Dicing with Death: 044 Part 2",
    "num": 165,
    "url": "/watch?v=UCa9ixFdZWI"
  },
  {
    "title": "Dicing with Death: 044 Part 3",
    "num": 166,
    "url": "/watch?v=RLdCBIQIbbg"
  },
  {
    "title": "Dicing with Death: 045 Part 1",
    "num": 167,
    "url": "/watch?v=OZOM5nA--bY"
  },
  {
    "title": "Dicing with Death: 045 Part 2",
    "num": 168,
    "url": "/watch?v=-_tm9Mpwn88"
  },
  {
    "title": "Dicing with Death: 045 Part 3",
    "num": 169,
    "url": "/watch?v=ZL0-ffk_ybs"
  },
  {
    "title": "Dicing with Death: 045 Part 4",
    "num": 170,
    "url": "/watch?v=CDq0RgfY0FU"
  },
  {
    "title": "Dicing with Death: 046 Part 1",
    "num": 171,
    "url": "/watch?v=Fw2QNzLgAIg"
  },
  {
    "title": "Dicing with Death: 046 Part 2",
    "num": 172,
    "url": "/watch?v=mbHMotOPebc"
  },
  {
    "title": "Dicing with Death: 046 Part 3",
    "num": 173,
    "url": "/watch?v=UrnnLOgcDp0"
  },
  {
    "title": "Dicing with Death: 046 Part 4",
    "num": 174,
    "url": "/watch?v=pSUIEhBbUk4"
  },
  {
    "title": "Dicing with Death: 046 Part 5",
    "num": 175,
    "url": "/watch?v=aEBgD4eFVvc"
  },
  {
    "title": "Dicing with Death: 046 Part 6",
    "num": 176,
    "url": "/watch?v=_UsJP5YK3K0"
  },
  {
    "title": "Dicing with Death: 047 Part 1",
    "num": 177,
    "url": "/watch?v=3vKbQJbYJ6E"
  },
  {
    "title": "Dicing with Death: 047 Part 2",
    "num": 178,
    "url": "/watch?v=rTYHoOMjHbQ"
  },
  {
    "title": "Dicing with Death: 048 Part 1",
    "num": 179,
    "url": "/watch?v=hdqIBBUsen4"
  },
  {
    "title": "Dicing with Death: 048 Part 2",
    "num": 180,
    "url": "/watch?v=jIVjDBWnfuY"
  },
  {
    "title": "Dicing with Death: 048 Part 3",
    "num": 181,
    "url": "/watch?v=5JIt5QfWwNY"
  },
  {
    "title": "Dicing with Death: 048 Part 4",
    "num": 182,
    "url": "/watch?v=H38ZO4Up61s"
  },
  {
    "title": "Dicing with Death: 049 Part 1",
    "num": 183,
    "url": "/watch?v=gv51z9ldqFc"
  },
  {
    "title": "Dicing with Death: 049 Part 2",
    "num": 184,
    "url": "/watch?v=AbC6skCtRc4"
  },
  {
    "title": "Dicing with Death: 049 Part 3",
    "num": 185,
    "url": "/watch?v=pSI9VMQ2sqE"
  },
  {
    "title": "Dicing with Death: 049 Part 4",
    "num": 186,
    "url": "/watch?v=tvnQAz7KLN8"
  },
  {
    "title": "Dicing with Death: 050 Part 1",
    "num": 187,
    "url": "/watch?v=Qiq34TAaRgk"
  },
  {
    "title": "Dicing with Death: 050 Part 2",
    "num": 188,
    "url": "/watch?v=ZnvAyZXCTvc"
  },
  {
    "title": "Dicing with Death: 050 Part 3",
    "num": 189,
    "url": "/watch?v=qJo6NQqkaSE"
  },
  {
    "title": "Dicing with Death: 051 Part 1",
    "num": 190,
    "url": "/watch?v=GArtFyw-zS0"
  },
  {
    "title": "Dicing with Death: 051 Part 2",
    "num": 191,
    "url": "/watch?v=aWtqjcKmOT4"
  },
  {
    "title": "Dicing with Death: 051 Part 3",
    "num": 192,
    "url": "/watch?v=MJuBnuUnHOI"
  },
  {
    "title": "Dicing with Death: 051 Part 4",
    "num": 193,
    "url": "/watch?v=QwHfDfDVquI"
  },
  {
    "title": "Dicing with Death: 052 Part 1",
    "num": 194,
    "url": "/watch?v=-Jo80FGwQ3A"
  },
  {
    "title": "Dicing with Death: 052 Part 2",
    "num": 195,
    "url": "/watch?v=2FSZnumACZo"
  },
  {
    "title": "Dicing with Death: 052 Part 3",
    "num": 196,
    "url": "/watch?v=D0BpW3vX8c0"
  },
  {
    "title": "Dicing with Death: 053 Part 1",
    "num": 197,
    "url": "/watch?v=VT4kc_nZnuc"
  },
  {
    "title": "Dicing with Death: 053 Part 2",
    "num": 198,
    "url": "/watch?v=8LryN7C4lxY"
  },
  {
    "title": "Dicing with Death: 053 Part 3",
    "num": 199,
    "url": "/watch?v=1J4bako9GTM"
  },
  {
    "title": "Dicing with Death: 053 Part 4",
    "num": 200,
    "url": "/watch?v=dQmonoLJ-fw"
  },
  {
    "title": "Dicing with Death: 054 Part 1",
    "num": 201,
    "url": "/watch?v=VYffRrYlQos"
  },
  {
    "title": "Dicing with Death: 054 Part 2",
    "num": 202,
    "url": "/watch?v=6Q9_dRqgBAw"
  },
  {
    "title": "Dicing with Death: 054 Part 3",
    "num": 203,
    "url": "/watch?v=tqBC6Yt2jv4"
  },
  {
    "title": "Dicing with Death: 055 Part 1",
    "num": 204,
    "url": "/watch?v=pzfLP0yBi4g"
  },
  {
    "title": "Dicing with Death: 055 Part 2",
    "num": 205,
    "url": "/watch?v=dOQJNd-Vle4"
  },
  {
    "title": "Dicing with Death: 055 Part 3",
    "num": 206,
    "url": "/watch?v=LdRkauwWe4E"
  },
  {
    "title": "Dicing with Death: 055 Part 4",
    "num": 207,
    "url": "/watch?v=VZmXnwTnyZA"
  },
  {
    "title": "Dicing with Death: 056 Part 1",
    "num": 208,
    "url": "/watch?v=Fr4yRrypbqc"
  },
  {
    "title": "Dicing with Death: 056 Part 2",
    "num": 209,
    "url": "/watch?v=XehoVoPZ3cs"
  },
  {
    "title": "Dicing with Death: 056 Part 3",
    "num": 210,
    "url": "/watch?v=zsAy5hVuucM"
  },
  {
    "title": "Dicing with Death: 056 Part 4",
    "num": 211,
    "url": "/watch?v=RRkh0LDUj54"
  },
  {
    "title": "Dicing with Death: 056 Part 5",
    "num": 212,
    "url": "/watch?v=ZeMRF5UT504"
  },
  {
    "title": "Dicing with Death: 057 Part 1",
    "num": 213,
    "url": "/watch?v=vTj-50vEfDQ"
  },
  {
    "title": "Dicing with Death: 057 Part 2",
    "num": 214,
    "url": "/watch?v=uI1FH0ahonQ"
  },
  {
    "title": "Dicing with Death: 057 Part 3",
    "num": 215,
    "url": "/watch?v=aZ00AIUIxtk"
  },
  {
    "title": "Dicing with Death: 057 Part 4",
    "num": 216,
    "url": "/watch?v=KkKED6oJu18"
  },
  {
    "title": "Dicing with Death: 058 Part 1",
    "num": 217,
    "url": "/watch?v=9j9y633QG-I"
  },
  {
    "title": "Dicing with Death: 058 Part 2",
    "num": 218,
    "url": "/watch?v=XBazMMbWDP4"
  },
  {
    "title": "Dicing with Death: 058 Part 3",
    "num": 219,
    "url": "/watch?v=OG1HrO3JniI"
  },
  {
    "title": "Dicing with Death: 058 Part 4",
    "num": 220,
    "url": "/watch?v=2TroAWLh30c"
  },
  {
    "title": "Dicing with Death: 059 Part 1",
    "num": 221,
    "url": "/watch?v=Cp_drN6PinI"
  },
  {
    "title": "Dicing with Death: 059 Part 2",
    "num": 222,
    "url": "/watch?v=7CZM43Jh4dc"
  },
  {
    "title": "Dicing with Death: 059 Part 3",
    "num": 223,
    "url": "/watch?v=lGjZm1UmA0Q"
  },
  {
    "title": "Dicing with Death: 059 Part 4",
    "num": 224,
    "url": "/watch?v=hSXFmqqk9RA"
  },
  {
    "title": "Dicing with Death: 060 Part 1",
    "num": 225,
    "url": "/watch?v=Yr2scw9orhE"
  },
  {
    "title": "Dicing with Death: 060 Part 2",
    "num": 226,
    "url": "/watch?v=3mOOJQrutYU"
  },
  {
    "title": "Dicing with Death: 060 Part 3",
    "num": 227,
    "url": "/watch?v=KBUQU2WByF0"
  },
  {
    "title": "Dicing with Death: 060 Part 4",
    "num": 228,
    "url": "/watch?v=w22TLAKpXhY"
  },
  {
    "title": "Dicing with Death: 061 Part 1",
    "num": 229,
    "url": "/watch?v=INYxyM2ldaE"
  },
  {
    "title": "Dicing with Death: 061 Part 2",
    "num": 230,
    "url": "/watch?v=HLqm65IfOqc"
  },
  {
    "title": "Dicing with Death: 061 Part 3",
    "num": 231,
    "url": "/watch?v=tv6-wasPpo8"
  },
  {
    "title": "Dicing with Death: 061 Part 4",
    "num": 232,
    "url": "/watch?v=h6qHlnhdtvQ"
  },
  {
    "title": "Dicing with Death: 062 Part 1",
    "num": 233,
    "url": "/watch?v=TQolYc1z6XU"
  },
  {
    "title": "Dicing with Death: 062 Part 2",
    "num": 234,
    "url": "/watch?v=AmX2isuULK0"
  },
  {
    "title": "Dicing with Death: 062 Part 3",
    "num": 235,
    "url": "/watch?v=LS1HgZbShBQ"
  },
  {
    "title": "Dicing With Death: 063 Part 1",
    "num": 236,
    "url": "/watch?v=pfDayOEVlww"
  },
  {
    "title": "Dicing With Death: 063 Part 2",
    "num": 237,
    "url": "/watch?v=QFE93hO43U0"
  },
  {
    "title": "Dicing With Death: 063 Part 3",
    "num": 238,
    "url": "/watch?v=sBLuh6JQ-xk"
  },
  {
    "title": "Dicing With Death: 063 Part 4",
    "num": 239,
    "url": "/watch?v=y33k7y0zVTQ"
  },
  {
    "title": "Dicing with Death: 064 Part 1",
    "num": 240,
    "url": "/watch?v=EI_og6395j8"
  },
  {
    "title": "Dicing with Death: 064 Part 2",
    "num": 241,
    "url": "/watch?v=4p1f9ztHWks"
  },
  {
    "title": "Dicing with Death: 064 Part 3",
    "num": 242,
    "url": "/watch?v=uLM0c_vPJ68"
  },
  {
    "title": "Dicing with Death: 064 Part 4",
    "num": 243,
    "url": "/watch?v=5Ud8BrWlGKs"
  },
  {
    "title": "Dicing with Death: 065 Part 1 (Video Stuttering)",
    "num": 244,
    "url": "/watch?v=CKEszIKCUF0"
  },
  {
    "title": "Dicing with Death: 065 Part 2",
    "num": 245,
    "url": "/watch?v=SrHJ9KPvKVQ"
  },
  {
    "title": "Dicing with Death: 065 Part 3",
    "num": 246,
    "url": "/watch?v=UL1b046BCsk"
  },
  {
    "title": "Dicing with Death: 066 Part 1",
    "num": 247,
    "url": "/watch?v=3ebZis3SULI"
  },
  {
    "title": "Dicing with Death: 066 Part 2",
    "num": 248,
    "url": "/watch?v=xnY0YxmhBL4"
  },
  {
    "title": "Dicing with Death: 066 Part 3",
    "num": 249,
    "url": "/watch?v=DQl7CP_uEvQ"
  },
  {
    "title": "Dicing with Death: 066 Part 4",
    "num": 250,
    "url": "/watch?v=Cz7DGRzYGS4"
  },
  {
    "title": "Dicing with Death: 067 Part 1",
    "num": 251,
    "url": "/watch?v=ZD_DgXVX6F0"
  },
  {
    "title": "Dicing with Death: 067 Part 2",
    "num": 252,
    "url": "/watch?v=cQuUTp-Qe80"
  },
  {
    "title": "Dicing with Death: 067 Part 3",
    "num": 253,
    "url": "/watch?v=Byz2mkI5QYA"
  },
  {
    "title": "Dicing with Death: 067 Part 4",
    "num": 254,
    "url": "/watch?v=NeRT8MMmUhM"
  },
  {
    "title": "Dicing with Death: 068 Part 1",
    "num": 255,
    "url": "/watch?v=VnB5z1KfYo8"
  },
  {
    "title": "Dicing with Death: 068 Part 2",
    "num": 256,
    "url": "/watch?v=oyDIt_eMBdc"
  },
  {
    "title": "Dicing with Death: 068 Part 3",
    "num": 257,
    "url": "/watch?v=ZrZfAR94H24"
  },
  {
    "title": "Dicing with Death: 068 Part 4",
    "num": 258,
    "url": "/watch?v=4gfoHM0fN0s"
  },
  {
    "title": "Dicing with Death: 069 Part 1",
    "num": 259,
    "url": "/watch?v=rWU6kedui8w"
  },
  {
    "title": "Dicing with Death: 069 Part 2",
    "num": 260,
    "url": "/watch?v=gUBmqf0XQo4"
  },
  {
    "title": "Dicing with Death: 069 Part 3",
    "num": 261,
    "url": "/watch?v=eHbbcvhfWrs"
  },
  {
    "title": "Dicing with Death: 069 Part 4",
    "num": 262,
    "url": "/watch?v=ZvRs_D9uTL8"
  },
  {
    "title": "Dicing with Death: 070 Part 1",
    "num": 263,
    "url": "/watch?v=6Vpguu6ToKk"
  },
  {
    "title": "Dicing with Death: 070 Part 2",
    "num": 264,
    "url": "/watch?v=zt5-4F9fcSE"
  },
  {
    "title": "Dicing with Death: 070 Part 3",
    "num": 265,
    "url": "/watch?v=DrDTi7Z3OzI"
  },
  {
    "title": "Dicing with Death: 070 Part 4",
    "num": 266,
    "url": "/watch?v=WD53GRUvafQ"
  },
  {
    "title": "Dicing with Death: 071 Part 1",
    "num": 267,
    "url": "/watch?v=SWCH70TbasM"
  },
  {
    "title": "Dicing with Death: 071 Part 2",
    "num": 268,
    "url": "/watch?v=v6rQwS3PoZA"
  },
  {
    "title": "Dicing with Death: 071 Part 3",
    "num": 269,
    "url": "/watch?v=9Nju9DJN85U"
  },
  {
    "title": "Dicing with Death: 072 Part 1",
    "num": 270,
    "url": "/watch?v=vCdVegzosMI"
  },
  {
    "title": "Dicing with Death: 072 Part 2",
    "num": 271,
    "url": "/watch?v=wlGlkJp-dRs"
  },
  {
    "title": "Dicing with Death: 072 Part 3",
    "num": 272,
    "url": "/watch?v=m2YeCv2LiT0"
  },
  {
    "title": "Dicing with Death: 072 Part 4",
    "num": 273,
    "url": "/watch?v=dG1UZb1H7Fg"
  },
  {
    "title": "Dicing with Death: 073 Part 1",
    "num": 274,
    "url": "/watch?v=yffUN7HaY4o"
  },
  {
    "title": "Dicing with Death: 073 Part 2",
    "num": 275,
    "url": "/watch?v=YjPRH6vu49M"
  },
  {
    "title": "Dicing with Death: 073 Part 3",
    "num": 276,
    "url": "/watch?v=DsAOm18uO_A"
  },
  {
    "title": "Dicing with Death: 073 Part 4",
    "num": 277,
    "url": "/watch?v=3JNdy1SJhpo"
  },
  {
    "title": "Dicing with Death: 074 Part 1",
    "num": 278,
    "url": "/watch?v=LjPyOtI6gpk"
  },
  {
    "title": "Dicing with Death: 074 Part 2",
    "num": 279,
    "url": "/watch?v=coMLg_lJYQM"
  },
  {
    "title": "Dicing with Death: 074 Part 3",
    "num": 280,
    "url": "/watch?v=zbBA4xSqo3Q"
  },
  {
    "title": "Dicing with Death: 074 Part 4",
    "num": 281,
    "url": "/watch?v=VGlRpBr9ruw"
  },
  {
    "title": "Dicing with Death: 075 Part 1",
    "num": 282,
    "url": "/watch?v=vy4JAHLmiiM"
  },
  {
    "title": "Dicing with Death: 075 Part 2",
    "num": 283,
    "url": "/watch?v=pqsLocbZTko"
  },
  {
    "title": "Dicing with Death: 075 Part 3",
    "num": 284,
    "url": "/watch?v=1xbdRGq_ENY"
  },
  {
    "title": "Dicing with Death: 075 Part 4",
    "num": 285,
    "url": "/watch?v=sOaIUni3SMw"
  },
  {
    "title": "Dicing with Death: 076 Part 1",
    "num": 286,
    "url": "/watch?v=phCzOtG2Yvo"
  },
  {
    "title": "Dicing with Death: 076 Part 2",
    "num": 287,
    "url": "/watch?v=hQcak51tOlY"
  },
  {
    "title": "Dicing with Death: 076 Part 3",
    "num": 288,
    "url": "/watch?v=4kXgpVD7008"
  },
  {
    "title": "Dicing with Death: 076 Part 4",
    "num": 289,
    "url": "/watch?v=yrOevRpf1LE"
  },
  {
    "title": "Dicing with Death: 077 Part 1",
    "num": 290,
    "url": "/watch?v=tZmXxz8lrqQ"
  },
  {
    "title": "Dicing with Death: 077 Part 2",
    "num": 291,
    "url": "/watch?v=kIh7Xyusbno"
  },
  {
    "title": "Dicing with Death: 077 Part 3",
    "num": 292,
    "url": "/watch?v=DOmzwajsfok"
  },
  {
    "title": "Dicing with Death: 077 Part 4",
    "num": 293,
    "url": "/watch?v=yiEApm5Siwk"
  },
  {
    "title": "Dicing with Death: 078 Part 1",
    "num": 294,
    "url": "/watch?v=ixBf4yHxOSM"
  },
  {
    "title": "Dicing with Death: 078 Part 2",
    "num": 295,
    "url": "/watch?v=lW7wLRaNCz0"
  },
  {
    "title": "Dicing with Death: 078 Part 3",
    "num": 296,
    "url": "/watch?v=1l1hz0FhBRw"
  },
  {
    "title": "Dicing with Death: 079 Part 1",
    "num": 297,
    "url": "/watch?v=XbpsnSCiUk0"
  },
  {
    "title": "Dicing with Death: 079 Part 2",
    "num": 298,
    "url": "/watch?v=0TQ4ajVwfTY"
  },
  {
    "title": "Dicing with Death: 079 Part 3",
    "num": 299,
    "url": "/watch?v=Xam-Kqu8dPs"
  },
  {
    "title": "Dicing with Death: 079 Part 4",
    "num": 300,
    "url": "/watch?v=74fX8hKOCEQ"
  },
  {
    "title": "Dicing with Death: 079 Part 5",
    "num": 301,
    "url": "/watch?v=32-GrUr5U98"
  },
  {
    "title": "Dicing with Death: 080 Part 1",
    "num": 302,
    "url": "/watch?v=dupHYi2ON38"
  },
  {
    "title": "Dicing with Death: 080 Part 2",
    "num": 303,
    "url": "/watch?v=PyOxtEgAN_c"
  },
  {
    "title": "Dicing with Death: 080 Part 3",
    "num": 304,
    "url": "/watch?v=CAcly7EMnPg"
  },
  {
    "title": "Dicing with Death: 080 Part 4",
    "num": 305,
    "url": "/watch?v=G4EgCAM6-Y8"
  },
  {
    "title": "Dicing with Death: 081 Part 1",
    "num": 306,
    "url": "/watch?v=OSVIrByE4xs"
  },
  {
    "title": "Dicing with Death: 081 Part 2",
    "num": 307,
    "url": "/watch?v=211-JsjFcz8"
  },
  {
    "title": "Dicing with Death: 081 Part 3",
    "num": 308,
    "url": "/watch?v=kRXT8uQd0h0"
  },
  {
    "title": "Dicing with Death: 081 Part 4",
    "num": 309,
    "url": "/watch?v=iqGTCCkJsYw"
  },
  {
    "title": "Dicing with Death: 081 Part 5",
    "num": 310,
    "url": "/watch?v=3NMAotmBMdE"
  },
  {
    "title": "Dicing with Death: 082 Part 1",
    "num": 311,
    "url": "/watch?v=178_6v45adA"
  },
  {
    "title": "Dicing with Death: 082 Part 2",
    "num": 312,
    "url": "/watch?v=V23_FBREMBM"
  },
  {
    "title": "Dicing with Death: 082 Part 3",
    "num": 313,
    "url": "/watch?v=UvmMyq_bSbQ"
  },
  {
    "title": "Dicing with Death: 082 Part 4",
    "num": 314,
    "url": "/watch?v=pXzXCQ4elGI"
  },
  {
    "title": "Dicing with Death: 083 Part 1",
    "num": 315,
    "url": "/watch?v=nxOl8MOnbKo"
  },
  {
    "title": "Dicing with Death: 083 Part 2",
    "num": 316,
    "url": "/watch?v=5VeTvdKZrhg"
  },
  {
    "title": "Dicing with Death: 083 Part 3",
    "num": 317,
    "url": "/watch?v=zDNkkCyIie4"
  },
  {
    "title": "Dicing with Death: 083 Part 4",
    "num": 318,
    "url": "/watch?v=AKJSuL_9ybY"
  },
  {
    "title": "Dicing with Death: 084 Part 1",
    "num": 319,
    "url": "/watch?v=H8zOs7omByc"
  },
  {
    "title": "Dicing with Death: 084 Part 2",
    "num": 320,
    "url": "/watch?v=3BKjQ6vRvZ4"
  },
  {
    "title": "Dicing with Death: 084 Part 3",
    "num": 321,
    "url": "/watch?v=H6pxQNHw0Xg"
  },
  {
    "title": "Dicing with Death: 084 Part 4",
    "num": 322,
    "url": "/watch?v=fJIZR93UkDM"
  },
  {
    "title": "Dicing with Death: 085 Part 1",
    "num": 323,
    "url": "/watch?v=OjDy2cjNLOI"
  },
  {
    "title": "Dicing with Death: 085 Part 2",
    "num": 324,
    "url": "/watch?v=cxm91e6tS_k"
  },
  {
    "title": "Dicing with Death: 085 Part 3",
    "num": 325,
    "url": "/watch?v=A0NhFWcmVNY"
  },
  {
    "title": "Dicing with Death: 085 Part 4",
    "num": 326,
    "url": "/watch?v=h4_x1cDiEkM"
  },
  {
    "title": "Dicing with Death: 086 Part 1",
    "num": 327,
    "url": "/watch?v=QaPZodVtC_s"
  },
  {
    "title": "Dicing with Death: 086 Part 2",
    "num": 328,
    "url": "/watch?v=yTXv7L-E-R0"
  },
  {
    "title": "Dicing with Death: 086 Part 3",
    "num": 329,
    "url": "/watch?v=gx1NsRNbVTs"
  },
  {
    "title": "Dicing with Death: 086 Part 4",
    "num": 330,
    "url": "/watch?v=pq6ZWmGNt50"
  },
  {
    "title": "Dicing with Death: 087 Part 1",
    "num": 331,
    "url": "/watch?v=l9JrRpJH-zE"
  },
  {
    "title": "Dicing with Death: 087 Part 2",
    "num": 332,
    "url": "/watch?v=u3GnuKbCLKQ"
  },
  {
    "title": "Dicing with Death: 087 Part 3",
    "num": 333,
    "url": "/watch?v=BhWKhV1Tgaw"
  },
  {
    "title": "Dicing with Death: 087 Part 4",
    "num": 334,
    "url": "/watch?v=Cq5GZMPmTG4"
  },
  {
    "title": "Dicing with Death: 087 Part 5",
    "num": 335,
    "url": "/watch?v=FQ1XnPwawgI"
  },
  {
    "title": "Dicing with Death: 088 Part 1",
    "num": 336,
    "url": "/watch?v=5If3oF1bSCs"
  },
  {
    "title": "Dicing with Death: 088 Part 2",
    "num": 337,
    "url": "/watch?v=WSuKjOgXfpY"
  },
  {
    "title": "Dicing with Death: 088 Part 3",
    "num": 338,
    "url": "/watch?v=r5Aopjh_Shk"
  },
  {
    "title": "Dicing with Death: 088 Part 4",
    "num": 339,
    "url": "/watch?v=cH-oL4s7ICk"
  },
  {
    "title": "Dicing with Death: 088 Part 5",
    "num": 340,
    "url": "/watch?v=BNlGwtykKUI"
  },
  {
    "title": "Dicing with Death: 088 Part 6",
    "num": 341,
    "url": "/watch?v=ZN-HryicbzE"
  },
  {
    "title": "Dicing with Death: 089 Parts 1",
    "num": 342,
    "url": "/watch?v=Y62m73ti72A"
  },
  {
    "title": "Dicing with Death: 089 Parts 2",
    "num": 343,
    "url": "/watch?v=rVtF5Mzf52o"
  },
  {
    "title": "Dicing with Death: 089 Parts 3",
    "num": 344,
    "url": "/watch?v=7VZ3UbRPdTc"
  },
  {
    "title": "Dicing with Death: 089 Parts 4",
    "num": 345,
    "url": "/watch?v=HpRaDnTPxiA"
  },
  {
    "title": "Dicing with Death: 090 Part 1",
    "num": 346,
    "url": "/watch?v=fcFi9JfiKlg"
  },
  {
    "title": "Dicing with Death: 090 Part 2",
    "num": 347,
    "url": "/watch?v=9gW9XyhGCew"
  },
  {
    "title": "Dicing with Death: 090 Part 3",
    "num": 348,
    "url": "/watch?v=MIVIYA1vFMY"
  },
  {
    "title": "Dicing with Death: 090 Part 4",
    "num": 349,
    "url": "/watch?v=ld0vtzqdeIc"
  },
  {
    "title": "Dicing with Death: 091 Part 1",
    "num": 350,
    "url": "/watch?v=zDyOgRglcuc"
  },
  {
    "title": "Dicing with Death: 091 Part 2",
    "num": 351,
    "url": "/watch?v=F2hNhDSbf7c"
  },
  {
    "title": "Dicing with Death: 091 Part 3",
    "num": 352,
    "url": "/watch?v=O0OkajSr4xQ"
  },
  {
    "title": "Dicing with Death: 091 Part 4",
    "num": 353,
    "url": "/watch?v=PTFlV7cVOfg"
  },
  {
    "title": "Dicing with Death: 092 Part 1",
    "num": 354,
    "url": "/watch?v=B9lIT13xIlg"
  },
  {
    "title": "Dicing with Death: 092 Part 2",
    "num": 355,
    "url": "/watch?v=rp71h4k47Ac"
  },
  {
    "title": "Dicing with Death: 092 Part 3",
    "num": 356,
    "url": "/watch?v=o2X7lLpRQ-U"
  },
  {
    "title": "Dicing with Death: 092 Part 4",
    "num": 357,
    "url": "/watch?v=h1WpLxgWTYY"
  },
  {
    "title": "Dicing with Death: 093 Part 1",
    "num": 358,
    "url": "/watch?v=QmzPNqvlxgw"
  },
  {
    "title": "Dicing with Death: 093 Part 2",
    "num": 359,
    "url": "/watch?v=DdyNonqqnps"
  },
  {
    "title": "Dicing with Death: 093 Part 3",
    "num": 360,
    "url": "/watch?v=ZEAEcw-KHfg"
  },
  {
    "title": "Dicing with Death: 093 Part 4",
    "num": 361,
    "url": "/watch?v=C7lwnDXnMSU"
  },
  {
    "title": "Dicing with Death: 094 Part 1",
    "num": 362,
    "url": "/watch?v=P7v7ASY4Eq4"
  },
  {
    "title": "Dicing with Death: 094 Part 2",
    "num": 363,
    "url": "/watch?v=YSI7YnuW-zo"
  },
  {
    "title": "Dicing with Death: 094 Part 3",
    "num": 364,
    "url": "/watch?v=bWQ3JC4QArw"
  },
  {
    "title": "Dicing with Death: 094 Part 4",
    "num": 365,
    "url": "/watch?v=kbTDa_QChHA"
  },
  {
    "title": "Dicing with Death: 095 Part 1",
    "num": 366,
    "url": "/watch?v=ZKvJ6XkKaOA"
  },
  {
    "title": "Dicing with Death: 095 Part 2",
    "num": 367,
    "url": "/watch?v=Y72T8TKHdNY"
  },
  {
    "title": "Dicing with Death: 095 Part 3",
    "num": 368,
    "url": "/watch?v=sTgesWPNtRk"
  },
  {
    "title": "Dicing with Death: 095 Part 4",
    "num": 369,
    "url": "/watch?v=WiF_DfmPySw"
  },
  {
    "title": "Dicing with Death: 096 Part 1",
    "num": 370,
    "url": "/watch?v=_13_8Eq8fd8"
  },
  {
    "title": "Dicing with Death: 096 Part 2",
    "num": 371,
    "url": "/watch?v=RfckKPAqA88"
  },
  {
    "title": "Dicing with Death: 096 Part 3",
    "num": 372,
    "url": "/watch?v=U25wLyL2D5A"
  },
  {
    "title": "Dicing with Death: 096 Part 4",
    "num": 373,
    "url": "/watch?v=Af5DHAXBmNs"
  },
  {
    "title": "Dicing with Death: 097 Part 1",
    "num": 374,
    "url": "/watch?v=4OW2yc6yV6A"
  },
  {
    "title": "Dicing with Death: 097 Part 2",
    "num": 375,
    "url": "/watch?v=JVpzvUfNG0o"
  },
  {
    "title": "Dicing with Death: 097 Part 3",
    "num": 376,
    "url": "/watch?v=BZY2fGf32c8"
  },
  {
    "title": "Dicing with Death: 097 Part 4",
    "num": 377,
    "url": "/watch?v=23Drn15zzBo"
  },
  {
    "title": "Dicing with Death: 098 Part 1",
    "num": 378,
    "url": "/watch?v=7w9yiIwmmR8"
  },
  {
    "title": "Dicing with Death: 098 Part 2",
    "num": 379,
    "url": "/watch?v=VVA5-itJOno"
  },
  {
    "title": "Dicing with Death: 098 Part 3",
    "num": 380,
    "url": "/watch?v=bJs0Ub7PiKI"
  },
  {
    "title": "Dicing with Death: 098 Part 4",
    "num": 381,
    "url": "/watch?v=609fzMj7Hhc"
  },
  {
    "title": "Dicing with Death: 099 Part 1",
    "num": 382,
    "url": "/watch?v=VjZci54aHcU"
  },
  {
    "title": "Dicing with Death: 099 Part 2",
    "num": 383,
    "url": "/watch?v=E222-NB5On4"
  },
  {
    "title": "Dicing with Death: 099 Part 3",
    "num": 384,
    "url": "/watch?v=vAiEdNLlUqk"
  },
  {
    "title": "Dicing with Death: 099 Part 4",
    "num": 385,
    "url": "/watch?v=kyXsr9PFols"
  },
  {
    "title": "Dicing with Death: 100 Part 1",
    "num": 386,
    "url": "/watch?v=4SqSuC2aIp0"
  },
  {
    "title": "Dicing with Death: 100 Part 2",
    "num": 387,
    "url": "/watch?v=1rlFqzXG0XA"
  },
  {
    "title": "Dicing with Death: 100 Part 3",
    "num": 388,
    "url": "/watch?v=3lkWeJxyQao"
  },
  {
    "title": "Dicing with Death: 100 Part 4",
    "num": 389,
    "url": "/watch?v=RpDL8uaC9ss"
  },
  {
    "title": "Dicing with Death: 101 Part 1",
    "num": 390,
    "url": "/watch?v=_cJsgyxm2oc"
  },
  {
    "title": "Dicing with Death: 101 Part 2",
    "num": 391,
    "url": "/watch?v=KaiuoF3Zor4"
  },
  {
    "title": "Dicing with Death: 102 Part 1",
    "num": 392,
    "url": "/watch?v=Y33l1b9eM6k"
  },
  {
    "title": "Dicing with Death: 102 Part 2",
    "num": 393,
    "url": "/watch?v=thdHYym_7K4"
  },
  {
    "title": "Dicing with Death: 102 Part 3",
    "num": 394,
    "url": "/watch?v=vmA_Chgb5dU"
  },
  {
    "title": "Dicing with Death: 102 Part 4",
    "num": 395,
    "url": "/watch?v=_021pqTyuVU"
  },
  {
    "title": "Dicing with Death: 103 Part 1",
    "num": 396,
    "url": "/watch?v=8NOzXROtRNc"
  },
  {
    "title": "Dicing with Death: 103 Part 2",
    "num": 397,
    "url": "/watch?v=roaAPhS8vco"
  },
  {
    "title": "Dicing with Death: 103 Part 3",
    "num": 398,
    "url": "/watch?v=iC8_r9qbSLA"
  },
  {
    "title": "Dicing with Death: 103 Part 4",
    "num": 399,
    "url": "/watch?v=BfOb9ZYADME"
  },
  {
    "title": "Dicing with Death: 104 Part 1",
    "num": 400,
    "url": "/watch?v=wadSmCRpTPU"
  },
  {
    "title": "Dicing with Death: 104 Part 2",
    "num": 401,
    "url": "/watch?v=YEK_kyvF9I4"
  },
  {
    "title": "Dicing with Death: 104 Part 3",
    "num": 402,
    "url": "/watch?v=3RnVhrA9R-g"
  },
  {
    "title": "Dicing with Death: 104 Part 4",
    "num": 403,
    "url": "/watch?v=-Wb9PtNRRTs"
  },
  {
    "title": "Dicing with Death: 105 Part 1",
    "num": 404,
    "url": "/watch?v=VxaVxCba8vg"
  },
  {
    "title": "Dicing with Death: 105 Part 2",
    "num": 405,
    "url": "/watch?v=QobH6zZjqZE"
  },
  {
    "title": "Dicing with Death: 105 Part 3",
    "num": 406,
    "url": "/watch?v=EISlKlSXK10"
  },
  {
    "title": "Dicing with Death: 106 Part 1",
    "num": 407,
    "url": "/watch?v=RG-yC7PwYmg"
  },
  {
    "title": "Dicing with Death: 106 Part 2",
    "num": 408,
    "url": "/watch?v=RiAQ5Fb3KjQ"
  },
  {
    "title": "Dicing with Death: 106 Part 3",
    "num": 409,
    "url": "/watch?v=wDHxmi_XRa8"
  },
  {
    "title": "Dicing with Death: 106 Part 4",
    "num": 410,
    "url": "/watch?v=CtuoiXnEx4o"
  },
  {
    "title": "Dicing with Death: 107 Part 1",
    "num": 411,
    "url": "/watch?v=Mpl1xGvhRVw"
  },
  {
    "title": "Dicing with Death: 107 Part 2",
    "num": 412,
    "url": "/watch?v=Zk5dTe7Lb-4"
  },
  {
    "title": "Dicing with Death: 107 Part 3",
    "num": 413,
    "url": "/watch?v=2SUD1hxWups"
  },
  {
    "title": "Dicing with Death: 107 Part 4",
    "num": 414,
    "url": "/watch?v=lS51gyuZsaQ"
  },
  {
    "title": "Dicing with Death: 108 Part 1",
    "num": 415,
    "url": "/watch?v=VT7GDLG7In8"
  },
  {
    "title": "Dicing with Death: 108 Part 2",
    "num": 416,
    "url": "/watch?v=ApCqpSEahlo"
  },
  {
    "title": "Dicing with Death: 108 Part 3",
    "num": 417,
    "url": "/watch?v=_oJEBPaLNAc"
  },
  {
    "title": "Dicing with Death: 108 Part 4",
    "num": 418,
    "url": "/watch?v=9Q-mWvtnR6U"
  },
  {
    "title": "Dicing with Death: 108 Part 5",
    "num": 419,
    "url": "/watch?v=eWciBZFu3tQ"
  },
  {
    "title": "Dicing with Death: 109 Part 1",
    "num": 420,
    "url": "/watch?v=qYCNCoPtTqo"
  },
  {
    "title": "Dicing with Death: 109 Part 2",
    "num": 421,
    "url": "/watch?v=_hJQRDUgEJM"
  },
  {
    "title": "Dicing with Death: 109 Part 3",
    "num": 422,
    "url": "/watch?v=NPfG4pH_PtU"
  },
  {
    "title": "Dicing with Death: 110 Part 1",
    "num": 423,
    "url": "/watch?v=34dyBAdszLA"
  },
  {
    "title": "Dicing with Death: 110 Part 2",
    "num": 424,
    "url": "/watch?v=jpigNAk4X0I"
  },
  {
    "title": "Dicing with Death: 110 Part 3",
    "num": 425,
    "url": "/watch?v=_YMBMutpRQM"
  },
  {
    "title": "Dicing with Death: 111 Part 1",
    "num": 426,
    "url": "/watch?v=0WX4T76zFVs"
  },
  {
    "title": "Dicing with Death: 111 Part 2",
    "num": 427,
    "url": "/watch?v=FmqseOsVdSc"
  },
  {
    "title": "Dicing with Death: 111 Part 3",
    "num": 428,
    "url": "/watch?v=ICERn-UMbG0"
  },
  {
    "title": "Dicing with Death: 111 Part 4",
    "num": 429,
    "url": "/watch?v=rp2S1driiiI"
  },
  {
    "title": "Dicing with Death: 112 Part 1",
    "num": 430,
    "url": "/watch?v=IY2RBIVhJ8c"
  },
  {
    "title": "Dicing with Death: 112 Part 2",
    "num": 431,
    "url": "/watch?v=siCHSaDnZMk"
  },
  {
    "title": "Dicing with Death: 112 Part 3",
    "num": 432,
    "url": "/watch?v=1tQVk5O0bcQ"
  },
  {
    "title": "Dicing with Death: 113 Part 1",
    "num": 433,
    "url": "/watch?v=PfJcjFo57h4"
  },
  {
    "title": "Dicing with Death: 113 Part 2",
    "num": 434,
    "url": "/watch?v=IVEAhY08gUM"
  },
  {
    "title": "Dicing with Death: 113 Part 3",
    "num": 435,
    "url": "/watch?v=ytiz4Vu_5r8"
  },
  {
    "title": "Dicing with Death: 113 Part 4",
    "num": 436,
    "url": "/watch?v=tDlSrnwNLmQ"
  },
  {
    "title": "Dicing with Death: 114 Part 1",
    "num": 437,
    "url": "/watch?v=GQmwq3eB3aw"
  },
  {
    "title": "Dicing with Death: 114 Part 2",
    "num": 438,
    "url": "/watch?v=56hXvAe-a88"
  },
  {
    "title": "Dicing with Death: 114 Part 3",
    "num": 439,
    "url": "/watch?v=VGC2SCBVo9k"
  },
  {
    "title": "Dicing with Death: 114 Part 4",
    "num": 440,
    "url": "/watch?v=NcI1NMYBIUc"
  },
  {
    "title": "Dicing with Death: 115 Part 1",
    "num": 441,
    "url": "/watch?v=b7T_19TLlhQ"
  },
  {
    "title": "Dicing with Death: 115 Part 2",
    "num": 442,
    "url": "/watch?v=vRccqgtrmeU"
  },
  {
    "title": "Dicing with Death: 115 Part 3",
    "num": 443,
    "url": "/watch?v=d3sI68SJIBU"
  },
  {
    "title": "Dicing with Death: 115 Part 4",
    "num": 444,
    "url": "/watch?v=wfYLQ3psHlk"
  },
  {
    "title": "Dicing with Death: 116 Part 1",
    "num": 445,
    "url": "/watch?v=LUMsypQbKtw"
  },
  {
    "title": "Dicing with Death: 116 Part 2",
    "num": 446,
    "url": "/watch?v=hF562seHTEQ"
  },
  {
    "title": "Dicing with Death: 116 Part 3",
    "num": 447,
    "url": "/watch?v=ppe-HJMmIko"
  },
  {
    "title": "Dicing with Death 117: Leon's New Name - Part 1",
    "num": 448,
    "url": "/watch?v=dIbFXp08bVs"
  },
  {
    "title": "Dicing with Death 117: Leon's New Name - Part 2",
    "num": 449,
    "url": "/watch?v=CMAqY2hMTkI"
  },
  {
    "title": "Dicing with Death 117: Leon's New Name - Part 3",
    "num": 450,
    "url": "/watch?v=9fo6oiCS0oc"
  },
  {
    "title": "Dicing with Death 117: Leon's New Name - Part 4",
    "num": 451,
    "url": "/watch?v=TE3x_pReMdY"
  },
  {
    "title": "Dicing with Death 118: Druid quest - Part 1",
    "num": 452,
    "url": "/watch?v=QYEGRZvTbpE"
  },
  {
    "title": "Dicing with Death 118: Druid quest - Part 2",
    "num": 453,
    "url": "/watch?v=tRiEjS553uo"
  },
  {
    "title": "Dicing with Death 118: Druid quest - Part 3",
    "num": 454,
    "url": "/watch?v=Euy2pGEfnaU"
  },
  {
    "title": "Dicing with Death 119: Outfoxing the Fox - Part 1",
    "num": 455,
    "url": "/watch?v=AZGl_mETOfc"
  },
  {
    "title": "Dicing with Death 119: Outfoxing the Fox - Part 2",
    "num": 456,
    "url": "/watch?v=O4FkPetMbcE"
  },
  {
    "title": "Dicing with Death 120: Paranoia and Impatience - Part 1",
    "num": 457,
    "url": "/watch?v=c18xWsPMB2o"
  },
  {
    "title": "Dicing with Death 120: Paranoia and Impatience - Part 2",
    "num": 458,
    "url": "/watch?v=pbcQESmGE48"
  },
  {
    "title": "Dicing with Death 120: Paranoia and Impatience - Part 3",
    "num": 459,
    "url": "/watch?v=P801pXnQHh8"
  },
  {
    "title": "Dicing with Death 121: The Mad Monk - Part 1",
    "num": 460,
    "url": "/watch?v=62rGL2buKwI"
  },
  {
    "title": "Dicing with Death 121: The Mad Monk - Part 2",
    "num": 461,
    "url": "/watch?v=T55XyNST3wQ"
  },
  {
    "title": "Dicing with Death 121: The Mad Monk - Part 3",
    "num": 462,
    "url": "/watch?v=XyWUhjiOS00"
  },
  {
    "title": "Dicing with Death 122: Madness Manifests - Part 1",
    "num": 463,
    "url": "/watch?v=KFr0qEmanVI"
  },
  {
    "title": "Dicing with Death 122: Madness Manifests - Part 2",
    "num": 464,
    "url": "/watch?v=SmwPLFpcY-U"
  },
  {
    "title": "Dicing with Death 122: Madness Manifests - Part 3",
    "num": 465,
    "url": "/watch?v=N6Po5j8PPfk"
  },
  {
    "title": "Dicing with Death 123: Island Hopping - Part 1",
    "num": 466,
    "url": "/watch?v=NPnUyBhS70s"
  },
  {
    "title": "Dicing with Death 123: Island Hopping - Part 2",
    "num": 467,
    "url": "/watch?v=zW40SiFi1js"
  },
  {
    "title": "Dicing with Death 123: Island Hopping - Part 3",
    "num": 468,
    "url": "/watch?v=tb2rhrePGUM"
  },
  {
    "title": "Dicing with Death 124: Leon gets Lost. Again. - Part 1",
    "num": 469,
    "url": "/watch?v=8W4quf61Vd4"
  },
  {
    "title": "Dicing with Death 124: Leon gets Lost. Again. - Part 2",
    "num": 470,
    "url": "/watch?v=-gYmT8HWtgg"
  },
  {
    "title": "Dicing with Death 124: Random chatter",
    "num": 471,
    "url": "/watch?v=rtesJrMZrn0"
  },
  {
    "title": "Dicing with Death 125: Trees and Mushrooms - Part 1",
    "num": 472,
    "url": "/watch?v=CSWducGDS-E"
  },
  {
    "title": "Dicing with Death 125: Trees and Mushrooms - Part 2",
    "num": 473,
    "url": "/watch?v=TqW9B6QEr20"
  },
  {
    "title": "Dicing with Death 125: Trees and Mushrooms - Part 3",
    "num": 474,
    "url": "/watch?v=AHDuA-dH78o"
  },
  {
    "title": "Dicing with Death 126: The end of Leon - Part 1",
    "num": 475,
    "url": "/watch?v=zZQoySrxdlI"
  },
  {
    "title": "Dicing with Death 126: The end of Leon - Part 2",
    "num": 476,
    "url": "/watch?v=jChxWGBfM5o"
  },
  {
    "title": "Dicing with Death 126: The end of Leon - Part 3",
    "num": 477,
    "url": "/watch?v=Ztxu35XCKeg"
  },
  {
    "title": "Dicing with Death 127: Qualneer returns - Part 1",
    "num": 478,
    "url": "/watch?v=INSKEl9lAFw"
  },
  {
    "title": "Dicing with Death 127: Qualneer returns - Part 2",
    "num": 479,
    "url": "/watch?v=F4nsEgESI_A"
  },
  {
    "title": "Dicing with Death 127: Qualneer returns - Part 3",
    "num": 480,
    "url": "/watch?v=ZF7g3NK09fA"
  },
  {
    "title": "Dicing with Death 128: Finding Bloodletter - Part 1",
    "num": 481,
    "url": "/watch?v=iNwHplxYAXo"
  },
  {
    "title": "Dicing with Death 128: Finding Bloodletter - Part 2",
    "num": 482,
    "url": "/watch?v=z-71wJveA6Y"
  },
  {
    "title": "Dicing with Death 129: Great Minds..: Part 1",
    "num": 483,
    "url": "/watch?v=HTYWnk6MIWE"
  },
  {
    "title": "Dicing with Death 129: Great Minds..: Part 2",
    "num": 484,
    "url": "/watch?v=703nYITk-0I"
  },
  {
    "title": "Dicing with Death 129: Great Minds..: Part 3",
    "num": 485,
    "url": "/watch?v=ZygCggJ--3I"
  },
  {
    "title": "Dicing with Death 130: Den of Thieves Part 1",
    "num": 486,
    "url": "/watch?v=T-gV2J4ANQI"
  },
  {
    "title": "Dicing with Death 130: Den of Thieves Part 2",
    "num": 487,
    "url": "/watch?v=B5meZYwxNeo"
  },
  {
    "title": "Dicing with Death 130: Den of Thieves Part 3",
    "num": 488,
    "url": "/watch?v=EceOyBKMt-4"
  },
  {
    "title": "Dicing with Death 130: Den of Thieves Part 4",
    "num": 489,
    "url": "/watch?v=POoSdvD2Lf8"
  },
  {
    "title": "Dicing with Death 131: They like to play hard - Part 1",
    "num": 490,
    "url": "/watch?v=z0DAQfMCHNw"
  },
  {
    "title": "Dicing with Death 131: They like to play hard - Part 2",
    "num": 491,
    "url": "/watch?v=XAz8dVe6itE"
  },
  {
    "title": "Dicing with Death 131: They like to play hard - Part 3",
    "num": 492,
    "url": "/watch?v=EPdUUax3xNg"
  },
  {
    "title": "Dicing with Death 132: Naked elf beats off dwarves Part 1",
    "num": 493,
    "url": "/watch?v=RkZwsRsTzCA"
  },
  {
    "title": "Dicing with Death 132: Naked elf beats off dwarves Part 2",
    "num": 494,
    "url": "/watch?v=0FTk6R2dtKU"
  },
  {
    "title": "Dicing with Death 132: Naked elf beats off dwarves Part 3",
    "num": 495,
    "url": "/watch?v=psTovPbAl4A"
  },
  {
    "title": "Dicing with Death 133: Jailbreak - Part 1",
    "num": 496,
    "url": "/watch?v=QfBP5peG6ps"
  },
  {
    "title": "Dicing with Death 133: Jailbreak - Part 2",
    "num": 497,
    "url": "/watch?v=ooZlcIH9bKA"
  },
  {
    "title": "Dicing with Death 133: Jailbreak - Part 3",
    "num": 498,
    "url": "/watch?v=keE5JHjBcds"
  },
  {
    "title": "Dicing with Death 133: Jailbreak - Part 4",
    "num": 499,
    "url": "/watch?v=EXY53uNiGAI"
  },
  {
    "title": "Dicing with Death 134: Zwiehard - Part 1",
    "num": 500,
    "url": "/watch?v=wSTY59vkwWo"
  },
  {
    "title": "Dicing with Death 134: Zwiehard - Part 2",
    "num": 501,
    "url": "/watch?v=BEZpY9zPCEs"
  },
  {
    "title": "Dicing with Death 134: Zwiehard - Part 3",
    "num": 502,
    "url": "/watch?v=9bjxFUpKaTk"
  },
  {
    "title": "Dicing with Death 134: Zwiehard - Part 4",
    "num": 503,
    "url": "/watch?v=RqxjxEt3okg"
  },
  {
    "title": "Dicing with Death 135: Forging - Part 1",
    "num": 504,
    "url": "/watch?v=gvTRkSg2u2c"
  },
  {
    "title": "Dicing with Death 135: Forging - Part 2",
    "num": 505,
    "url": "/watch?v=BdIdaalw2RU"
  },
  {
    "title": "Dicing with Death 135: Forging - Part 3",
    "num": 506,
    "url": "/watch?v=yfI6AbxGOW8"
  },
  {
    "title": "Dicing with Death 135: Forging - Part 4",
    "num": 507,
    "url": "/watch?v=CTDOvZL6j90"
  },
  {
    "title": "Dicing with Death 136: Cyclops Unsighted - Part 1",
    "num": 508,
    "url": "/watch?v=5_Dbj9M_vUU"
  },
  {
    "title": "Dicing with Death 136: Cyclops Unsighted - Part 2",
    "num": 509,
    "url": "/watch?v=zjMxTruTA5w"
  },
  {
    "title": "Dicing with Death 136: Cyclops Unsighted - Part 2 (cont)",
    "num": 510,
    "url": "/watch?v=7IP7FeUux8E"
  },
  {
    "title": "Dicing with Death 136: Cyclops Unsighted - Part 3",
    "num": 511,
    "url": "/watch?v=jYMNrVWquME"
  },
  {
    "title": "Dicing with Death 136: Cyclops Unsighted - Part 4",
    "num": 512,
    "url": "/watch?v=oSV4eoBQ2zo"
  },
  {
    "title": "Dicing with Death 137: Feeding the Fires - Part 1",
    "num": 513,
    "url": "/watch?v=Tb53PIskQfA"
  },
  {
    "title": "Dicing with Death 137: Feeding the Fires - Part 2",
    "num": 514,
    "url": "/watch?v=km5aJ_6Ysc8"
  },
  {
    "title": "Dicing with Death 137: Feeding the Fires - Part 3",
    "num": 515,
    "url": "/watch?v=vYLxp1PdzMA"
  },
  {
    "title": "Dicing with Death 138: Returning Home - Part 1",
    "num": 516,
    "url": "/watch?v=ubMaFOBIraU"
  },
  {
    "title": "Dicing with Death 138: Returning Home - Part 2",
    "num": 517,
    "url": "/watch?v=1MS-5PMP-xU"
  },
  {
    "title": "Dicing with Death 138: Returning Home - Part 3",
    "num": 518,
    "url": "/watch?v=XXjsForQAlw"
  },
  {
    "title": "Dicing with Death 139: Small Problems - Part 1",
    "num": 519,
    "url": "/watch?v=0CdpA4ck64Q"
  },
  {
    "title": "Dicing with Death 139: Small Problems - Part 2",
    "num": 520,
    "url": "/watch?v=_3Joiq4YTZc"
  },
  {
    "title": "Dicing with Death 139: Small Problems - Part 3",
    "num": 521,
    "url": "/watch?v=C-pccYeajFE"
  },
  {
    "title": "Dicing with Death 140: Mil Faldur - Part 1",
    "num": 522,
    "url": "/watch?v=VOIiPUbkqVY"
  },
  {
    "title": "Dicing with Death 140: Mil Faldur - Part 2",
    "num": 523,
    "url": "/watch?v=2HWspmAgyrI"
  },
  {
    "title": "Dicing with Death 140: Mil Faldur - Part 3",
    "num": 524,
    "url": "/watch?v=NnWiZTBHFMI"
  },
  {
    "title": "Dicing with Death 141: Demonic Discoveries - Part 1",
    "num": 525,
    "url": "/watch?v=7mprUMa3a-g"
  },
  {
    "title": "Dicing with Death 141: Demonic Discoveries - Part 2",
    "num": 526,
    "url": "/watch?v=uli9LAkWgDI"
  },
  {
    "title": "Dicing with Death 141: Demonic Discoveries - Part 3",
    "num": 527,
    "url": "/watch?v=kw1i8XcUigg"
  },
  {
    "title": "Dicing with Death 141: Demonic Discoveries - Part 4",
    "num": 528,
    "url": "/watch?v=iRpSuedCJPI"
  },
  {
    "title": "Dicing with Death 142: There's Mithril in Them There Hills - Part 1",
    "num": 529,
    "url": "/watch?v=XwDS-hxyV-4"
  },
  {
    "title": "Dicing with Death 142: There's Mithril in Them There Hills - Part 2",
    "num": 530,
    "url": "/watch?v=ZsOJCVuYktU"
  },
  {
    "title": "Dicing with Death 142: There's Mithril in Them There Hills - Part 3",
    "num": 531,
    "url": "/watch?v=EXBYcawBMCs"
  },
  {
    "title": "Dicing with Death 142: There's Mithril in Them There Hills - Part 4",
    "num": 532,
    "url": "/watch?v=3jxva-BVDfA"
  },
  {
    "title": "Dicing with Death 143: Minor Mining Mission - Part 1",
    "num": 533,
    "url": "/watch?v=p89ZFh391ho"
  },
  {
    "title": "Dicing with Death 143: Minor Mining Mission - Part 2",
    "num": 534,
    "url": "/watch?v=hrAe6ZpiIig"
  },
  {
    "title": "Dicing with Death 143: Minor Mining Mission - Part 3",
    "num": 535,
    "url": "/watch?v=gslUeo8csbk"
  },
  {
    "title": "Dicing with Death 144: End of Zweihard - Part 1",
    "num": 536,
    "url": "/watch?v=Qnu6WSKsEQ8"
  },
  {
    "title": "Dicing with Death 144: End of Zweihard - Part 2",
    "num": 537,
    "url": "/watch?v=4wCdG0XwH_s"
  },
  {
    "title": "Dicing with Death 144: Making Malcifer",
    "num": 538,
    "url": "/watch?v=tGPg1fLNSfw"
  },
  {
    "title": "Dicing with Death 145: Malcifer - Part 1",
    "num": 539,
    "url": "/watch?v=AagGr71v18k"
  },
  {
    "title": "Dicing with Death 145: Malcifer - Part 2",
    "num": 540,
    "url": "/watch?v=LChQQaP0K68"
  },
  {
    "title": "Dicing with Death 145: Malcifer - Part 3",
    "num": 541,
    "url": "/watch?v=tGQ7Y8Jbnt4"
  },
  {
    "title": "Dicing with Death 146: The Cask of Winters - Part 1",
    "num": 542,
    "url": "/watch?v=ZGN5fQvYv7I"
  },
  {
    "title": "Dicing with Death 146: The Cask of Winters - Part 2",
    "num": 543,
    "url": "/watch?v=FSOxnwlsAsc"
  },
  {
    "title": "Dicing with Death 146: The Cask of Winters - Part 3",
    "num": 544,
    "url": "/watch?v=wmAA3dGptWg"
  },
  {
    "title": "Dicing with Death 147: Night Knight - Part 1",
    "num": 545,
    "url": "/watch?v=9uAZOO_UzFQ"
  },
  {
    "title": "Dicing with Death 147: Night Knight - Part 2",
    "num": 546,
    "url": "/watch?v=IqnUWEpa-C0"
  },
  {
    "title": "Dicing with Death 148: The Summer God - Part 1",
    "num": 547,
    "url": "/watch?v=Pmgq95DxVrU"
  },
  {
    "title": "Dicing with Death 148: The Summer God - Part 2",
    "num": 548,
    "url": "/watch?v=Z6G4w-tM-YU"
  },
  {
    "title": "Dicing with Death 148: The Summer God - Part 3",
    "num": 549,
    "url": "/watch?v=qXSA0eyNceQ"
  },
  {
    "title": "Dicing with Death 148: The Summer God - Part 4",
    "num": 550,
    "url": "/watch?v=6VfnT16MzEk"
  },
  {
    "title": "Dicing with Death 149: 2 Necromancers, 1 Cleric - Part 1",
    "num": 551,
    "url": "/watch?v=EFkezgYLP64"
  },
  {
    "title": "Dicing with Death 149: 2 Necromancers, 1 Cleric - Part 2",
    "num": 552,
    "url": "/watch?v=xaNCVQ4O29M"
  },
  {
    "title": "Dicing with Death 150: Domestic Affairs - Part 1",
    "num": 553,
    "url": "/watch?v=wJRwZBbtyOU"
  },
  {
    "title": "Dicing with Death 150: Domestic Affairs - Part 2",
    "num": 554,
    "url": "/watch?v=RrLFOtRE57g"
  },
  {
    "title": "Dicing with Death 150: Domestic Affairs - Part 3",
    "num": 555,
    "url": "/watch?v=mUEJSTdph6k"
  },
  {
    "title": "Dicing with Death 151: Invaded - Part 1",
    "num": 556,
    "url": "/watch?v=efSEO6-JAIw"
  },
  {
    "title": "Dicing with Death 151: Invaded - Part 2",
    "num": 557,
    "url": "/watch?v=XkRqmu-DFjo"
  },
  {
    "title": "Dicing with Death 151: Invaded - Part 3",
    "num": 558,
    "url": "/watch?v=64gTaN2cSJ4"
  },
  {
    "title": "Dicing with Death 152: Malcifer Rises - Part 1",
    "num": 559,
    "url": "/watch?v=qjLZ22W96Yc"
  },
  {
    "title": "Dicing with Death 152: Malcifer Rises - Part 2",
    "num": 560,
    "url": "/watch?v=dZC1K5KiynY"
  },
  {
    "title": "Dicing with Death 153: Raising an Army - Part 1",
    "num": 561,
    "url": "/watch?v=MDNpbQnxmnY"
  },
  {
    "title": "Dicing with Death 153: Raising an Army - Part 2",
    "num": 562,
    "url": "/watch?v=eO_CtYBM-AI"
  },
  {
    "title": "Dicing with Death 153: Raising an Army - Part 3",
    "num": 563,
    "url": "/watch?v=OvS2Wn4A_H8"
  },
  {
    "title": "Dicing with Death 154: The First Siege - Part 1",
    "num": 564,
    "url": "/watch?v=1HYqPSTyfRQ"
  },
  {
    "title": "Dicing with Death 154: The First Siege - Part 2",
    "num": 565,
    "url": "/watch?v=vzC_C4xDBZs"
  },
  {
    "title": "Dicing with Death 154: The First Siege - Part 3",
    "num": 566,
    "url": "/watch?v=nAI7VyN7KzI"
  },
  {
    "title": "Dicing with Death 155: Ambushed! - Part 1",
    "num": 567,
    "url": "/watch?v=mYOWYxhEV1U"
  },
  {
    "title": "Dicing with Death 155: Ambushed! - Part 2",
    "num": 568,
    "url": "/watch?v=qjvWkgEQcaU"
  },
  {
    "title": "Dicing with Death 155: Ambushed! - Part 3",
    "num": 569,
    "url": "/watch?v=l30m8tHdEmw"
  },
  {
    "title": "Dicing with Death 156: Invaded - Part 1",
    "num": 570,
    "url": "/watch?v=PPjY4O8dJOA"
  },
  {
    "title": "Dicing with Death 156: Invaded - Part 2",
    "num": 571,
    "url": "/watch?v=bM9GX_hRx7A"
  },
  {
    "title": "Dicing with Death 156: Invaded - Part 3",
    "num": 572,
    "url": "/watch?v=o1ETNVK7_nM"
  },
  {
    "title": "Dicing with Death 156: Invaded - Part 4",
    "num": 573,
    "url": "/watch?v=8risDpIzSZI"
  },
  {
    "title": "Dicing with Death 157: Snake Oil - Part 1",
    "num": 574,
    "url": "/watch?v=uKF3zhe7ge8"
  },
  {
    "title": "Dicing with Death 157: Snake Oil - Part 2",
    "num": 575,
    "url": "/watch?v=onZw-tMcw3A"
  },
  {
    "title": "Dicing with Death 157: Snake Oil - Part 3",
    "num": 576,
    "url": "/watch?v=-V99TITX_Hw"
  },
  {
    "title": "Dicing with Death 158: Pushing the Lines - Part 1",
    "num": 577,
    "url": "/watch?v=Dya5vME3xaU"
  },
  {
    "title": "Dicing with Death 158: Pushing the Lines - Part 2",
    "num": 578,
    "url": "/watch?v=HBWzyxYWHPA"
  },
  {
    "title": "Dicing with Death 158: Pushing the Lines - Part 3",
    "num": 579,
    "url": "/watch?v=jeQwTXuZbJE"
  },
  {
    "title": "Dicing with Death 159: Tribute & War - Part 1",
    "num": 580,
    "url": "/watch?v=5Xqu9O6klVo"
  },
  {
    "title": "Dicing with Death 159: Tribute & War - Part 2",
    "num": 581,
    "url": "/watch?v=3OlwU_ipuq8"
  },
  {
    "title": "Dicing with Death 159: Tribute & War - Part 3",
    "num": 582,
    "url": "/watch?v=zh-TD3PSoxs"
  },
  {
    "title": "Dicing with Death 160: Parley - Part 1",
    "num": 583,
    "url": "/watch?v=MkJtZB0K5yE"
  },
  {
    "title": "Dicing with Death 160: Parley - Part 2",
    "num": 584,
    "url": "/watch?v=teQQaoOQp1w"
  },
  {
    "title": "Dicing with Death 160: Parley - Part 3",
    "num": 585,
    "url": "/watch?v=QrR64JxL_eA"
  },
  {
    "title": "Dicing with Death 160: Parley - Part 4",
    "num": 586,
    "url": "/watch?v=4Oi-pSJ045U"
  },
  {
    "title": "Dicing with Death 161: The Last Days of Lord Winter - Part 1",
    "num": 587,
    "url": "/watch?v=mL3i8NhAt-U"
  },
  {
    "title": "Dicing with Death 161: The Last Days of Lord Winter - Part 2",
    "num": 588,
    "url": "/watch?v=AbKNywoW4N8"
  },
  {
    "title": "Dicing with Death 161: The Last Days of Lord Winter - Part 3",
    "num": 589,
    "url": "/watch?v=f2kg4KRZzrM"
  },
  {
    "title": "Dicing with Death 162: Siege of Pinespur - Part 1",
    "num": 590,
    "url": "/watch?v=gPD5CgdkWoQ"
  },
  {
    "title": "Dicing with Death 162: Siege of Pinespur - Part 2",
    "num": 591,
    "url": "/watch?v=vgjNns-s3D0"
  },
  {
    "title": "Dicing with Death 162: Siege of Pinespur - Part 3",
    "num": 592,
    "url": "/watch?v=vOcsJiCsQj0"
  },
  {
    "title": "Dicing with Death 163: Siege of Pinespur - Part 4",
    "num": 593,
    "url": "/watch?v=cvo_bvlEwEU"
  },
  {
    "title": "Dicing with Death 164: Malcifer the King - Part 1",
    "num": 594,
    "url": "/watch?v=KI91Ap_hilc"
  },
  {
    "title": "Dicing with Death 164: Malcifer the King - Part 2",
    "num": 595,
    "url": "/watch?v=utnl2bnK9O4"
  },
  {
    "title": "Dicing with Death 164: Malcifer the King - Part 3",
    "num": 596,
    "url": "/watch?v=aY2b-0ov2yA"
  },
  {
    "title": "Dicing with Death 165: Necromancer Decomposition - Part 1",
    "num": 597,
    "url": "/watch?v=BhpzYmh2U1k"
  },
  {
    "title": "Dicing with Death 165: Necromancer Decomposition - Part 2",
    "num": 598,
    "url": "/watch?v=mu87ERpQ3cs"
  },
  {
    "title": "Dicing with Death 166: Halvar the Berserker - Part 1",
    "num": 599,
    "url": "/watch?v=KKORK222E_o"
  },
  {
    "title": "Dicing with Death 166: Halvar the Berserker - Part 2",
    "num": 600,
    "url": "/watch?v=lU0eSJre2mE"
  },
  {
    "title": "Dicing with Death 167: Halvar's Spirits - Part 1",
    "num": 601,
    "url": "/watch?v=AnKsc-13yjg"
  },
  {
    "title": "Dicing with Death 167: Halvar's Spirits - Part 2",
    "num": 602,
    "url": "/watch?v=qbBVYSJ2TLk"
  },
  {
    "title": "Dicing with Death 167: Halvar's Spirits - Part 3",
    "num": 603,
    "url": "/watch?v=fbeVUBgQ8kg"
  },
  {
    "title": "Dicing with Death 167: Halvar's Spirits - Part 4",
    "num": 604,
    "url": "/watch?v=_iUGvHRQe_g"
  },
  {
    "title": "Dicing with Death 168: Halvar's Oath - Part 1",
    "num": 605,
    "url": "/watch?v=i78NR7VbuI8"
  },
  {
    "title": "Dicing with Death 168: Halvar's Oath - Part 2",
    "num": 606,
    "url": "/watch?v=stroYfhPVsY"
  },
  {
    "title": "Dicing with Death 168: Halvar's Oath - Part 3",
    "num": 607,
    "url": "/watch?v=2EVg1zn5Af0"
  },
  {
    "title": "Dicing with Death 169: Halvar's Ghost - Part 1",
    "num": 608,
    "url": "/watch?v=CKchNhU2L1k"
  },
  {
    "title": "Dicing with Death 169: Halvar's Ghost - Part 2",
    "num": 609,
    "url": "/watch?v=xZFjE7hPWoI"
  },
  {
    "title": "Dicing with Death 169: Halvar's Ghost - Part 3",
    "num": 610,
    "url": "/watch?v=SaYLxAZqq1g"
  },
  {
    "title": "Dicing with Death 170: Halvar's Madness - Part 1",
    "num": 611,
    "url": "/watch?v=N1YWVUNeJNA"
  },
  {
    "title": "Dicing with Death 170: Halvar's Madness - Part 2",
    "num": 612,
    "url": "/watch?v=R1CNPE88DwI"
  },
  {
    "title": "Dicing with Death 170: Halvar's Madness - Part 3",
    "num": 613,
    "url": "/watch?v=xM_OAP3MgM8"
  },
  {
    "title": "Dicing with Death 171: Halvar's Skin - Part 1",
    "num": 614,
    "url": "/watch?v=y-tqYNrJdts"
  },
  {
    "title": "Dicing with Death 171: Halvar's Skin - Part 2",
    "num": 615,
    "url": "/watch?v=mpmxq5T5klk"
  },
  {
    "title": "Dicing with Death 171: Halvar's Skin - Part 3",
    "num": 616,
    "url": "/watch?v=O-5OfUUNB9g"
  },
  {
    "title": "Dicing with Death 171: Halvar's Skin - Part 4",
    "num": 617,
    "url": "/watch?v=klb0TcojzDI"
  },
  {
    "title": "Dicing with Death 172: Halvar's Pain - Part 1",
    "num": 618,
    "url": "/watch?v=4rsL7_w1Ur0"
  },
  {
    "title": "Dicing with Death 172: Halvar's Pain - Part 2",
    "num": 619,
    "url": "/watch?v=M0f9IPNCbNY"
  },
  {
    "title": "Dicing with Death 173: Halvar's Revenge - Part 1",
    "num": 620,
    "url": "/watch?v=1qFGBtRhrWU"
  },
  {
    "title": "Dicing with Death 173: Halvar's Revenge - Part 2",
    "num": 621,
    "url": "/watch?v=zZkYzCdo8fo"
  },
  {
    "title": "Dicing with Death 173: Halvar's Revenge - Part 3",
    "num": 622,
    "url": "/watch?v=dnVWdHNcAQg"
  },
  {
    "title": "Dicing with Death 174: Halvar's Vengeance - Part 1",
    "num": 623,
    "url": "/watch?v=_WJTIEzQn3c"
  },
  {
    "title": "Dicing with Death 174: Halvar's Vengeance - Part 2",
    "num": 624,
    "url": "/watch?v=BYTsWoIMPRc"
  },
  {
    "title": "Dicing with Death 174: Halvar's Vengeance - Part 3",
    "num": 625,
    "url": "/watch?v=8ndd0MF6hDo"
  },
  {
    "title": "Dicing with Death 175: Halvar's Victory - Part 1",
    "num": 626,
    "url": "/watch?v=wyygA9c8HYM"
  },
  {
    "title": "Dicing with Death 175: Halvar's Victory - Part 2",
    "num": 627,
    "url": "/watch?v=QsqjVEopHXI"
  },
  {
    "title": "Dicing with Death 175: Halvar's Victory - Part 3",
    "num": 628,
    "url": "/watch?v=6MHLKFs0C8o"
  },
  {
    "title": "Dicing with Death 176: Halvar's Soul - Part 1",
    "num": 629,
    "url": "/watch?v=ejQ_4jzk4_I"
  },
  {
    "title": "Dicing with Death 176: Halvar's Soul - Part 2",
    "num": 630,
    "url": "/watch?v=dNZrC-D4XPQ"
  },
  {
    "title": "Dicing with Death 176: Halvar's Soul - Part 3",
    "num": 631,
    "url": "/watch?v=oep-V7jNQrY"
  },
  {
    "title": "Dicing with Death 176: Halvar's Soul - Part 4",
    "num": 632,
    "url": "/watch?v=bNoXrCEsQdc"
  },
  {
    "title": "Dicing with Death 177: Halvar's Return - Part 1",
    "num": 633,
    "url": "/watch?v=yZAcPLlK6_4"
  },
  {
    "title": "Dicing with Death 177: Halvar's Return - Part 2",
    "num": 634,
    "url": "/watch?v=ZoirwFyLABA"
  },
  {
    "title": "Dicing with Death 177: Halvar's Return - Part 3",
    "num": 635,
    "url": "/watch?v=2U-hVCpWwAs"
  },
  {
    "title": "Dicing with Death 178: Halvar's End - Part 1",
    "num": 636,
    "url": "/watch?v=abNQ0shj2xI"
  },
  {
    "title": "Dicing with Death 178: Halvar's End - Part 2",
    "num": 637,
    "url": "/watch?v=z1bgFo9GkZQ"
  },
  {
    "title": "Dicing with Death 178: Halvar's End - Part 3",
    "num": 638,
    "url": "/watch?v=_MBgU6dJy4A"
  },
  {
    "title": "Dicing with Death 178: Selkie Character Creation",
    "num": 639,
    "url": "/watch?v=-8d7Y00YESo"
  },
  {
    "title": "Dicing with Death 179: Prelude to Adventure - Part 1",
    "num": 640,
    "url": "/watch?v=OA_-dEqe3Qc"
  },
  {
    "title": "Dicing with Death 179: Prelude to Adventure - Part 2",
    "num": 641,
    "url": "/watch?v=0x9i1Ipud1M"
  },
  {
    "title": "Dicing with Death 179: Prelude to Adventure - Part 3",
    "num": 642,
    "url": "/watch?v=zYRwNiL-QXY"
  },
  {
    "title": "Dicing with Death 180: Conspiracy in Solstace - Part 1",
    "num": 643,
    "url": "/watch?v=T7AZjShadzg"
  },
  {
    "title": "Dicing with Death 180: Conspiracy in Solstace - Part 2",
    "num": 644,
    "url": "/watch?v=df4lLrTEv7Q"
  },
  {
    "title": "Dicing with Death 180: Conspiracy in Solstace - Part 3",
    "num": 645,
    "url": "/watch?v=xP6IfFEZoJA"
  },
  {
    "title": "Dicing with Death 181.1: Aquifers and Mines",
    "num": 646,
    "url": "/watch?v=10fsH-iUdQI"
  },
  {
    "title": "Dicing with Death 181.2: Aquifers and Mines",
    "num": 647,
    "url": "/watch?v=XcHWdDH6NZ0"
  },
  {
    "title": "Dicing with Death 182.1: Zweihard's King Plate",
    "num": 648,
    "url": "/watch?v=3yyZ6yOFWd8"
  },
  {
    "title": "Dicing with Death 182.2: Zweihard's King Plate",
    "num": 649,
    "url": "/watch?v=T8J1uRdPBrk"
  },
  {
    "title": "Dicing with Death 182.3: Zweihard's King Plate",
    "num": 650,
    "url": "/watch?v=ftoo8j67oEw"
  },
  {
    "title": "Dicing with Death 183.1: Grello",
    "num": 651,
    "url": "/watch?v=9HIZGIAmQDQ"
  },
  {
    "title": "Dicing with Death 183.2: Grello",
    "num": 652,
    "url": "/watch?v=JyIw-EmsecE"
  },
  {
    "title": "Dicing with Death 183.3: Grello",
    "num": 653,
    "url": "/watch?v=C6Z72JAiovk"
  },
  {
    "title": "Dicing with Death 183.4: Grello",
    "num": 654,
    "url": "/watch?v=D0qBBlt7ELM"
  },
  {
    "title": "Dicing with Death 184.1: Selkie gets a job",
    "num": 655,
    "url": "/watch?v=-vYjAWJ6G0Y"
  },
  {
    "title": "Dicing with Death 184.2: Selkie gets a job",
    "num": 656,
    "url": "/watch?v=yq-QG_UaOlI"
  },
  {
    "title": "Dicing with Death 184.3: Selkie gets a job",
    "num": 657,
    "url": "/watch?v=CK3_CdF3s18"
  },
  {
    "title": "Dicing with Death 184.4: Selkie gets a job",
    "num": 658,
    "url": "/watch?v=UrEid_okexY"
  },
  {
    "title": "Dicing with Death 185.1: Crime and Chips",
    "num": 659,
    "url": "/watch?v=u-w3bjpSjRI"
  },
  {
    "title": "Dicing with Death 185.2: Crime and Chips",
    "num": 660,
    "url": "/watch?v=s2t3X4QKnMU"
  },
  {
    "title": "Dicing with Death 185.3: Crime and Chips",
    "num": 661,
    "url": "/watch?v=PxrvQqcxEQ4"
  },
  {
    "title": "Dicing with Death 186.1: Solstace Jail",
    "num": 662,
    "url": "/watch?v=C459yXsr9Pw"
  },
  {
    "title": "Dicing with Death 186.2: Solstace Jail",
    "num": 663,
    "url": "/watch?v=YlwiEdHK0yM"
  },
  {
    "title": "Dicing with Death 186.3: Solstace Jail",
    "num": 664,
    "url": "/watch?v=1N5C9-wOv3E"
  },
  {
    "title": "Dicing with Death 187.1: Voyage to Sinteron",
    "num": 665,
    "url": "/watch?v=RGe-r3HbQyQ"
  },
  {
    "title": "Dicing with Death 187.2: Voyage to Sinteron",
    "num": 666,
    "url": "/watch?v=itG9Shy6pY4"
  },
  {
    "title": "Dicing with Death 187.3: Voyage to Sinteron",
    "num": 667,
    "url": "/watch?v=vTqVnZr4xng"
  },
  {
    "title": "Dicing with Death 188.1: Solstace Backally Backstabbing",
    "num": 668,
    "url": "/watch?v=-eujrJJBGu0"
  },
  {
    "title": "Dicing with Death 188.2: Solstace Backally Backstabbing",
    "num": 669,
    "url": "/watch?v=6yKNx0LaGHY"
  },
  {
    "title": "Dicing with Death 188.3: Solstace Backally Backstabbing",
    "num": 670,
    "url": "/watch?v=C1FwFJlZgFM"
  },
  {
    "title": "Dicing with Death 189.1: Selkie's Niche",
    "num": 671,
    "url": "/watch?v=K00DzSYhz5o"
  },
  {
    "title": "Dicing with Death 189.2:  Selkie's Niche",
    "num": 672,
    "url": "/watch?v=hKsuYQBfokA"
  },
  {
    "title": "Dicing with Death 189.3: Selkie's Niche",
    "num": 673,
    "url": "/watch?v=jeNwVho6Pz0"
  },
  {
    "title": "Dicing with Death 189.4: Selkie's Niche",
    "num": 674,
    "url": "/watch?v=PBEHLIePiQM"
  },
  {
    "title": "Dicing with Death 190.1: Selkie's Greed",
    "num": 675,
    "url": "/watch?v=DIdzcupGZuk"
  },
  {
    "title": "Dicing with Death 190.2: Selkie's Greed",
    "num": 676,
    "url": "/watch?v=dPb0nTzklXw"
  },
  {
    "title": "Dicing with Death 190.3: Selkie's Greed",
    "num": 677,
    "url": "/watch?v=i_FsUcOWZVI"
  },
  {
    "title": "Dicing with Death 191.1: Divans Divine Divinations",
    "num": 678,
    "url": "/watch?v=xgmTtJrZsCo"
  },
  {
    "title": "Dicing with Death 191.2: Divans Divine Divinations",
    "num": 679,
    "url": "/watch?v=Gd-1NWRebm8"
  },
  {
    "title": "Dicing with Death 191.3: Divans Divine Divinations",
    "num": 680,
    "url": "/watch?v=N9RB7dkF6wM"
  },
  {
    "title": "Dicing with Death 192.1: Seltzer's Grotto",
    "num": 681,
    "url": "/watch?v=Ty4AlLB-F1o"
  },
  {
    "title": "Dicing with Death 192.2: Seltzer's Grotto",
    "num": 682,
    "url": "/watch?v=I2_5UYNsGNs"
  },
  {
    "title": "Dicing with Death 192.3: Seltzer's Grotto",
    "num": 683,
    "url": "/watch?v=2SnIr139ll8"
  },
  {
    "title": "Dicing with Death 193.1: Gods of Grekos",
    "num": 684,
    "url": "/watch?v=BnLVjyTAjyg"
  },
  {
    "title": "Dicing with Death 193.2: Gods of Grekos",
    "num": 685,
    "url": "/watch?v=8H8eU0dyY-4"
  },
  {
    "title": "Dicing with Death: 193.3 Gods of Grekos",
    "num": 686,
    "url": "/watch?v=S5p50RamGqg"
  },
  {
    "title": "Dicing with Death 194.1: Romulus and Remus",
    "num": 687,
    "url": "/watch?v=TIcWSqbtRt8"
  },
  {
    "title": "Dicing with Death 194.2: Romulus and Remus",
    "num": 688,
    "url": "/watch?v=T-J7_lbunHU"
  },
  {
    "title": "Dicing with Death 194.3: Romulus and Remus",
    "num": 689,
    "url": "/watch?v=KZnzqBJRJMo"
  },
  {
    "title": "Dicing with Death 195.1: Romulus and Remus - II",
    "num": 690,
    "url": "/watch?v=8hzY0kPDz1Q"
  },
  {
    "title": "Dicing with Death 195.2: Romulus and Remus - II",
    "num": 691,
    "url": "/watch?v=iQivBIAvuv8"
  },
  {
    "title": "Dicing with Death 195.3: Romulus and Remus - II",
    "num": 692,
    "url": "/watch?v=oE_2ItPCArA"
  },
  {
    "title": "Dicing with Death 196.1: Giant Sheep Thieves",
    "num": 693,
    "url": "/watch?v=XcuKgOOklr8"
  },
  {
    "title": "Dicing with Death 196.2: Giant Sheep Thieves",
    "num": 694,
    "url": "/watch?v=9IFQ4QKNjNk"
  },
  {
    "title": "Dicing with Death 196.3: Giant Sheep Thieves",
    "num": 695,
    "url": "/watch?v=Wl9gyNaJPUY"
  },
  {
    "title": "Dicing with Death 197.1: Seeking the Troll",
    "num": 696,
    "url": "/watch?v=cokOVXgibEE"
  },
  {
    "title": "Dicing with Death 197.2: Seeking the Troll",
    "num": 697,
    "url": "/watch?v=OYRlZX7p7O0"
  },
  {
    "title": "Dicing with Death 198.1: Sculptors of Unusual Sizes",
    "num": 698,
    "url": "/watch?v=aVYpwVkE-gY"
  },
  {
    "title": "Dicing with Death 198.2: Sculptors of Unusual Sizes",
    "num": 699,
    "url": "/watch?v=GE5BJ0g6pL0"
  },
  {
    "title": "Dicing with Death 198.3: Sculptors of Unusual Sizes",
    "num": 700,
    "url": "/watch?v=ZBkDUQJ3AyM"
  },
  {
    "title": "Dicing with Death 199.1: Forest Statuary",
    "num": 701,
    "url": "/watch?v=sKOrbgJg5hU"
  },
  {
    "title": "Dicing with Death 199.2: Forest Statuary",
    "num": 702,
    "url": "/watch?v=PorYRTNkgKk"
  },
  {
    "title": "Dicing with Death 199.3: Forest Statuary",
    "num": 703,
    "url": "/watch?v=Pwe9CgkDMFs"
  },
  {
    "title": "Dicing with Death 200.1: Divan vs. Medusa",
    "num": 704,
    "url": "/watch?v=6x6Vrvjm8wo"
  },
  {
    "title": "Dicing with Death 200.2: Divan vs. Medusa",
    "num": 705,
    "url": "/watch?v=pKscniHYpEs"
  },
  {
    "title": "Dicing with Death 200.3: Divan vs. Medusa",
    "num": 706,
    "url": "/watch?v=CUnnzFnZ5rQ"
  },
  {
    "title": "Dicing with Death 201.1:  Hearthhome",
    "num": 707,
    "url": "/watch?v=vhUo93zedjc"
  },
  {
    "title": "Dicing with Death 201.2: Hearthhome",
    "num": 708,
    "url": "/watch?v=r4tLPBPJG6M"
  },
  {
    "title": "Dicing with Death 202.1: Chronos",
    "num": 709,
    "url": "/watch?v=fMprz2tpjDc"
  },
  {
    "title": "Dicing with Death 202.2: Chronos",
    "num": 710,
    "url": "/watch?v=p-f1djnhris"
  },
  {
    "title": "Dicing with Death 202.3: Chronos",
    "num": 711,
    "url": "/watch?v=_tRIWbqhiqo"
  },
  {
    "title": "Dicing with Death 203.1: Cyclops",
    "num": 712,
    "url": "/watch?v=rlqWB3dOIzI"
  },
  {
    "title": "Dicing with Death 203.2: Cyclops",
    "num": 713,
    "url": "/watch?v=LTwEkmsyl0Q"
  },
  {
    "title": "Dicing with Death 203.3: Cyclops",
    "num": 714,
    "url": "/watch?v=J88C8Nn9gN0"
  },
  {
    "title": "Dicing with Death 203.4: Cyclops",
    "num": 715,
    "url": "/watch?v=6jDyBzcztqM"
  },
  {
    "title": "Dicing with Death 204.1: Time Warp",
    "num": 716,
    "url": "/watch?v=IPYSjI2Kkt8"
  },
  {
    "title": "Dicing with Death 204.2: Time Warp",
    "num": 717,
    "url": "/watch?v=8mUuumyUI9s"
  },
  {
    "title": "Dicing with Death 204.3: Time Warp",
    "num": 718,
    "url": "/watch?v=sBRXLbHqiQ0"
  },
  {
    "title": "Dicing with Death 205.1: Playing with Portals",
    "num": 719,
    "url": "/watch?v=4JmW3DgEcvY"
  },
  {
    "title": "Dicing with Death 205.2: Playing with Portals",
    "num": 720,
    "url": "/watch?v=MXghRH6fmNY"
  },
  {
    "title": "Dicing with Death 206.1: Spells in Springtime",
    "num": 721,
    "url": "/watch?v=Glh2UrtYxoQ"
  },
  {
    "title": "Dicing with Death 206.2: Spells in Springtime",
    "num": 722,
    "url": "/watch?v=gN16b5EuuYE"
  },
  {
    "title": "Dicing with Death 206.3: Spells in Springtime",
    "num": 723,
    "url": "/watch?v=2sNFuQO6jC0"
  },
  {
    "title": "Dicing with Death 207.1: Take a Dwarf, Leave a Dwarf",
    "num": 724,
    "url": "/watch?v=dPLZbqrz6es"
  },
  {
    "title": "Dicing with Death 207.2: Take a Dwarf, Leave a Dwarf",
    "num": 725,
    "url": "/watch?v=KiN4KlwpIZI"
  },
  {
    "title": "Dicing with Death 207.3: Take a Dwarf, Leave a Dwarf",
    "num": 726,
    "url": "/watch?v=o999wGZVeCg"
  },
  {
    "title": "Dicing with Death 208.1: The Big Time Skip",
    "num": 727,
    "url": "/watch?v=fWwEj042xy0"
  },
  {
    "title": "Dicing with Death 208.2: The Big Time Skip",
    "num": 728,
    "url": "/watch?v=lfUdgPtWye8"
  },
  {
    "title": "Dicing with Death 209.1: Divan Plays with Potions and Planes",
    "num": 729,
    "url": "/watch?v=u3o6G7_hvg8"
  },
  {
    "title": "Dicing with Death 209.2: Divan Plays with Potions and Planes",
    "num": 730,
    "url": "/watch?v=MeeI0O_lKWk"
  },
  {
    "title": "Dicing with Death 209.3: Divan Plays with Potions and Planes",
    "num": 731,
    "url": "/watch?v=QxvSLUT9zl8"
  },
  {
    "title": "Dicing with Death 209.4: Divan Plays with Potions and Planes",
    "num": 732,
    "url": "/watch?v=28Dfx2oWGwk"
  },
  {
    "title": "Dicing with Death 210.1: The Elemental Hunt",
    "num": 733,
    "url": "/watch?v=O9PmjElRZVA"
  },
  {
    "title": "Dicing with Death 210.2: The Elemental Hunt",
    "num": 734,
    "url": "/watch?v=HbUWZOGWrq4"
  },
  {
    "title": "Dicing with Death 210.3: The Elemental Hunt",
    "num": 735,
    "url": "/watch?v=huqp9nGl9dg"
  },
  {
    "title": "Dicing with Death 210.4: The Elemental Hunt",
    "num": 736,
    "url": "/watch?v=KGnqX2Yj8R4"
  },
  {
    "title": "Dicing with Death 211.1: Orphia",
    "num": 737,
    "url": "/watch?v=v4oWpHo9NoQ"
  },
  {
    "title": "Dicing with Death 211.2: Orphia",
    "num": 738,
    "url": "/watch?v=51pmVnKJPmA"
  },
  {
    "title": "Dicing with Death 211.3: Orphia",
    "num": 739,
    "url": "/watch?v=v1sAlS_4qSw"
  },
  {
    "title": "Dicing with Death 212.1: Contact Outer Plane",
    "num": 740,
    "url": "/watch?v=3GOiTGd3r-E"
  },
  {
    "title": "Dicing with Death 212.2: Contact Outer Plane",
    "num": 741,
    "url": "/watch?v=2YQE2p3t6_Q"
  },
  {
    "title": "Dicing with Death 212.3: Contact Outer Plane",
    "num": 742,
    "url": "/watch?v=7OwTbeA1rDg"
  },
  {
    "title": "Dicing with Death 212.4: Contact Outer Plane",
    "num": 743,
    "url": "/watch?v=U9VtepWjgGk"
  },
  {
    "title": "Dicing with Death 212.5: Contact Outer Plane",
    "num": 744,
    "url": "/watch?v=vU8knOJjDjw"
  },
  {
    "title": "Dicing with Death 213.1: Unknown Title",
    "num": 745,
    "url": "/watch?v=TaMxlr66lYw"
  },
  {
    "title": "Dicing with Death 213.2: Unknown Title",
    "num": 746,
    "url": "/watch?v=SNIlQLwkOPU"
  },
  {
    "title": "Dicing with Death 213.3: Unknown Title",
    "num": 747,
    "url": "/watch?v=Uc2N-864Q7o"
  },
  {
    "title": "Dicing with Death 213.4: Unknown Title",
    "num": 748,
    "url": "/watch?v=PncSC8FIGnc"
  },
  {
    "title": "Dicing with Death 214.1: Feywild Dreams",
    "num": 749,
    "url": "/watch?v=o2M7HkXvqCI"
  },
  {
    "title": "Dicing with Death 214.2: Feywild Dreams",
    "num": 750,
    "url": "/watch?v=hL_wIrYp6m8"
  },
  {
    "title": "Dicing with Death 214.3: Feywild Dreams",
    "num": 751,
    "url": "/watch?v=Qovi2qVkt4w"
  },
  {
    "title": "Dicing with Death 215: Elements of Nekkraut",
    "num": 752,
    "url": "/watch?v=8fhUGO_TDzc"
  },
  {
    "title": "Dicing with Death 216: Thermal Dynamics",
    "num": 753,
    "url": "/watch?v=zE45_bcKcUM"
  },
  {
    "title": "Dicing with Death 217: Divan's Feyvorite",
    "num": 754,
    "url": "/watch?v=6d3b5vZVgLU"
  },
  {
    "title": "Dicing with Death 218: The Dwarf",
    "num": 755,
    "url": "/watch?v=j4qjd6ht1GI"
  },
  {
    "title": "Dicing with Death 219: Vire, Ignatius, and Enrico",
    "num": 756,
    "url": "/watch?v=RFRmb5k9Fks"
  },
  {
    "title": "Dicing with Death 220: Mini Session",
    "num": 757,
    "url": "/watch?v=L1MpWyORp94"
  }
]