const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.get("/availability-table", (req, res) => {
  res.json({
    availabilityTable: [
      [
        ['9:00', '10:00', '14:00', '16:00'],
        ['19:00', '20:00', '21:00', '22:00'],
        ['14:00', '16:00', '19:00', '20:00', '21:00', '22:00'],
        ['9:00', '16:00', '17:00'],
      ],
      [
        ['9:00'],
        [],
        ['14:00'],
        ['9:00', '16:00', '17:00'],
      ],
      [
        ['9:00', '10:00', '14:00', '16:00'],
        [],
        [],
        ['9:00', '16:00', '17:00'],
      ],
      [
        ['9:00', '10:00', '14:00', '16:00'],
        ['14:00', '16:00'],
        ['14:00', '16:00', '19:00', '20:00', '21:00', '22:00'],
        ['9:00', '16:00', '17:00'],
      ],
      [
        [],
        [],
        [],
        [],
      ],
      [
        ['9:00', '10:00', '14:00', '16:00', '20:00', '21:00', '22:00'],
        ['20:00', '21:00', '22:00'],
        ['14:00', '16:00', '19:00', '20:00', '21:00', '22:00'],
        ['9:00', '16:00', '17:00'],
      ],
      [
        ['9:00', '10:00', '14:00', '16:00'],
        ['9:00', '10:00', '14:00', '16:00'],
        ['9:00', '10:00', '14:00', '16:00'],
        ['9:00', '10:00', '14:00', '16:00'],
      ],
      [
        ['9:00', '10:00', '14:00', '16:00'],
        [],
        [],
        ['9:00', '16:00', '17:00'],
      ],
      [
        ['14:00', '16:00', '19:00', '20:00', '21:00', '22:00'],
        ['14:00', '16:00', '19:00', '20:00', '21:00', '22:00'],
        ['14:00', '16:00', '19:00', '20:00', '21:00', '22:00'],
        ['14:00', '16:00', '19:00', '20:00', '21:00', '22:00'],
      ],
      [
        ['9:00'],
        ['9:00'],
        ['9:00'],
        ['9:00'],
      ],
    ],
  });
});

app.get("/professionals", (req, res) => {
  res.json({
    professionalsList: [
      {
        avatar: {
          url: 'https://faces-img.xcdn.link/image-lorem-face-2912.jpg',
          altText: 'Joanna Vitória',
        },
        name: 'Joanna Vitória',
        specialty: 'psicologist',
        country: 'São José',
        rating: 5,
        price: 160,
        description: 'Sed in mauris in ipsum bibendum efficitur. Donec et maximus ante. Praesent non elit eget ligula laoreet volutpat. Sed nec consectetur massa, et commodo massa. Sed porta sodales ex non tempor. Nam sit amet orci ullamcorper, ultrices turpis sit amet, facilisis libero. Mauris nec ipsum eu nibh pulvinar pellentesque eget in elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque quam eros, vitae vestibulum ante congue a. Donec eu odio orci. Sed viverra eros eget sem rhoncus ornare. Donec massa mi, aliquam et euismod id, molestie sed ante. Phasellus aliquet, diam a facilisis vehicula, est elit fermentum enim.',
        startDate: {},
        endDate: {},
      },
      {
        avatar: {
          url: 'https://faces-img.xcdn.link/image-lorem-face-4910.jpg',
          altText: 'Pedro Paulo',
        },
        name: 'Pedro Paulo',
        specialty: 'psicologist',
        country: 'Juazeiro',
        rating: 4,
        price: 110,
        description: 'Sed in mauris in ipsum bibendum efficitur. Donec et maximus ante. Praesent non elit eget ligula laoreet volutpat. Sed nec consectetur massa, et commodo massa. Sed porta sodales ex non tempor. Nam sit amet orci ullamcorper, ultrices turpis sit amet, facilisis libero. Mauris nec ipsum eu nibh pulvinar pellentesque eget in elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque quam eros, vitae vestibulum ante congue a. Donec eu odio orci. Sed viverra eros eget sem rhoncus ornare. Donec massa mi, aliquam et euismod id, molestie sed ante. Phasellus aliquet, diam a facilisis vehicula, est elit fermentum enim.',
        startDate: {},
        endDate: {},
      },
      {
        avatar: {
          url: 'https://faces-img.xcdn.link/image-lorem-face-4406.jpg',
          altText: 'Maria Helena',
        },
        name: 'Maria Helena',
        specialty: 'psicologist',
        country: 'Cuiabá',
        rating: 3,
        price: 180,
        description: 'Sed in mauris in ipsum bibendum efficitur. Donec et maximus ante. Praesent non elit eget ligula laoreet volutpat. Sed nec consectetur massa, et commodo massa. Sed porta sodales ex non tempor. Nam sit amet orci ullamcorper, ultrices turpis sit amet, facilisis libero. Mauris nec ipsum eu nibh pulvinar pellentesque eget in elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque quam eros, vitae vestibulum ante congue a. Donec eu odio orci. Sed viverra eros eget sem rhoncus ornare. Donec massa mi, aliquam et euismod id, molestie sed ante. Phasellus aliquet, diam a facilisis vehicula, est elit fermentum enim.',
        startDate: {},
        endDate: {},
      },
    ],
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});