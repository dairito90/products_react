function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Camera',
      description: 'On-demand instagram camera',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'app/images/avatars/128.jpg',
      productImageUrl: 'http://cdn.blessthisstuff.com/imagens/stuff/instagram-socialmatic-camera-2.jpg',
    },
    {
      id: 2,
      title: 'Cell Phone',
      description: 'Nokia cell phone',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'app/images/avatars/129.jpg',
      productImageUrl: 'https://cdn.geekwire.com/wp-content/uploads/2016/09/be0ecef2-0eff-4896-a417-898d72c41af5-630x557.jpg',
    },
    {
      id: 3,
      title: 'Ipad',
      description: 'Transform your Ipad into an Arcade',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'app/images/avatars/130.jpg',
      productImageUrl: 'http://www.pocketmeta.com/wp-content/uploads/2014/01/iCade-iPad-Arcade-Cabinet.jpg',
    },
    {
      id: 4,
      title: 'Pc Tower',
      description: 'Ultimate Pc Tower',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'app/images/avatars/131.jpg',
      productImageUrl: 'https://cdn.thisiswhyimbroke.com/images/motorized-pc-case-alt-640x534.jpg',
    },
  ];

export {products, generateVoteCount};
