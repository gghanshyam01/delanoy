const express = require('express');
const _ = require('lodash');
const deepKeys = require('deep-keys');
const morgan = require('morgan');
const Sequelize = require('sequelize');

const { Performances } = require('./models/Performances');
const { Events } = require('./models/Events');
const { Venues } = require('./models/Venues');
const { Users } = require('./models/Users');

const { dataPoints } = require('./questionaire');

const { isEmail, isMobilePhone } = require('validator');



const sequelize = new Sequelize('demo', 'ghanshyam.intern', 'passwd', {
  host: 'sqlserver',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  const data = req.body;
  // if (_.has(data, 'first_name') && _.has(data, 'last_name') && _.has(data, 'email_id') && _.has(data, 'password') && _.has(data, 'mobile_number')) {
  if (_.xor(deepKeys(dataPoints.signup.request), deepKeys(data)).length === 0) {
    if (isMobilePhone(data.mobile_number, 'en-IN') && isEmail(data.email_id)) {
      // TODO insert into db
      Users.create(data)
        .then(() => {
          res.send(dataPoints.signup.response);
        })
        .catch(err => {
          res.status(500).send({ err: err });
        });
    } else {
      res.status(403).send({ err: 'mobile or email incorrect' });
    }
  } else {
    res.status(401).send({ err: 'Incorrect fields specified' });
  }
});

app.post('/login', (req, res) => {
  const data = req.body;
  // if (_.has(data, 'first_name') && _.has(data, 'last_name') && _.has(data, 'email_id') && _.has(data, 'password') && _.has(data, 'mobile_number')) {
  if (_.xor(deepKeys(dataPoints.login.request), deepKeys(data)).length === 0) {
    if (isEmail(data.email_id)) {
      Users.findOne({
        where: { email_id: data.email_id, password: data.password }
      })
        .then(currUser => {
          if (currUser) {
            res.send(currUser);
          } else {
            res.status(404).send({ err: 'Not found' });
          }
        })
        .catch(err => {
          res.status(500).send({ err: err });
        });
    } else {
      res.status(403).send();
    }
  } else {
    res.status(401).send();
  }
});

app.post('/create', (req, res) => {
  const myVenue = ['name', 'code', 'status', 'timezone'];
  const myEvent = ['title1', 'title2', 'location', 'location_type', 'status'];
  const myPerformance = [
    'show_start_datetime',
    'show_end_datetime',
    'sale_start',
    'status',
    'ticket_capacity'
  ];
  const venues = req.body.venues;
  for (const venue of venues) {
    const v = _.pick(venue, myVenue);
    console.log(v);
    Venues.create(v)
      .then(vData => {
        return vData.id;
      })
      .then(vId => {
        const events = venue.events;
        for (const event of events) {
          const e = _.pick(event, myEvent);
          e.venue_id = vId;
          Events.create(e)
            .then(eData => {
              return eData.id;
            })
            .then(eId => {
              const performances = event.performances;
              for (const performance of performances) {
                const p = _.pick(performance, myPerformance);
                p.event_id = eId;

                Performances.create(p).then(pData => {});
              }
            });
        }
      });
  }
  return res.send(dataPoints.create.response.data);
});

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
