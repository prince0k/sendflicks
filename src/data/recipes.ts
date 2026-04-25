export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  calories: string;
  tag: string;
  category: string;
}

export const featuredRecipes: Recipe[] = [
  {
    id: 'carnitas-tacos',
    title: 'Crispy Pork Carnitas Tacos',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANQwtm1Gi6Xx3PAVXITywnMUSHp-nTdXnSbtVj_Ek7SxcLGalYY_FxMUE7j5TbpsZWH0EAlkqsMXSB5khpEY_0Y99UbYdRSguAHUA_rq11zREp1HNRM9R_qEs3Lndlcc3PtNtyvIbmRnWr087PQNZ7dRGAXrRBIoWTe7QXaAT5jXalM0SFnATOwLMHtzadCwNPgZhC7YQsWBHyyg0UWZhh3ijg-78Aknk9IciALHFn-eTpjSjynXw084W5O1M4mGRNlBYSjTuMBfA',
    time: '45 mins',
    difficulty: 'Medium',
    calories: '420',
    tag: 'Weeknight Easy',
    category: 'Tex-Mex',
  },
  {
    id: 'peach-cobbler',
    title: 'Cast-Iron Peach Cobbler',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAYIppYEOQZ4WS01SARKnIMTx1t0V-0xpIiSYqOumvGTku7mRFsUYOwpO2K1fiHJkjQZyi-7uniV65gS33N4iWXKReUQ7OOftbmvI2aPTKOtGbOg5GF04tX23X4shlkgx6FHoyZlVUWWQ48v_Y2B1cAtwtjhxadNB6OMkMeAaMTfPA_PkXl_oYpSJOf9ALWsC7xhFH2b-_eYj2kDSLe4AVDlEUjsSRX8tnU_njJZeZkO5ThHKTuD4GPx4im-v_twu_ajuhSG6Ks8o',
    time: '1h 15m',
    difficulty: 'Easy',
    calories: '380',
    tag: 'Weekend Project',
    category: 'Desserts',
  },
  {
    id: 'shrimp-salad',
    title: 'Summer Harvest Shrimp Salad',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHXoB99or97j-rqBtxJheYByJfqOhErDXfzNv4x7P7nwLrNqaaFooHYlkJPC37Y6PWvIOvDK5eoYO-QqgUeW4q0_Pvbs2qbQGy_0BEbkRm4fnZ4KjC9d7DMZEb54G_vfkMTX7Jf57E9fbDe4R1Hp4ktpv1joo02sED-rERO4huF5menxqvGGL6gW8cUPOhEpgjRAphXWVE_U8LienjvgKHkx3HRtaodb_WHL03ZDEWxpzbsIdBDkG8L95yHeH9E1gZdHnhlWXu2ao',
    time: '20 mins',
    difficulty: 'Easy',
    calories: '290',
    tag: 'Weeknight Easy',
    category: 'Lunch',
  },
  {
    id: 'pot-roast',
    title: 'Slow-Roasted Southern Pot Roast',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5AFu_VauF8kFE4g7lfaofnW1Up9sSYxN0kOPaRfaji5af8RhhW03BP711psf1wLnt4SRdvrm_RpYqzkJYiAslWCGaqw-ndWcS_6Vy271kuhNFyKH7YEqdehQjyiQzv5U441vp5WuwrtgbW4dJ3xuPRTGoIRThKu8nJVXqk1mCy-v074NXAP1eqV8JjZG0y8-xqQl6Gx1o3GwcvEpDMRv7cOSqlzIJSYnehjLLuu7r3UkxsoRxPSHbEE3-fXWMmOpbwh9Q-xdLZOs',
    time: '3h 40m',
    difficulty: 'Hard',
    calories: '540',
    tag: 'Weekend Project',
    category: 'Dinner',
  },
];
