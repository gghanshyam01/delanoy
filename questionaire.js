// The dataPoints object contains 4 fields such as "signup", "login", "create", "update" and "delete".
// Each key represents a separate object and each object contains 3 fields from which the first key represents
// URL (i.e API path to be defined in the application), second key represents the request (i.e data to be sent to the API)
// and the last key represents the response (i.e Data expected from the API)

const dataPoints = {

  "signup": {

    "url": "http://localhost:3000/signup",

    "request": {
      "first_name": "Yapsody",
      "last_name": "Entertainment",
      "email_id": "developers@yapsody.com",
      "password": "Yapsody_123",
      "mobile_number": "1234567890"
    },

    "response": {
     "message": "Signed up Successfully.",
     "token": "asdjhwfe;lerfhsdcnsdjcvdfsdfdggeryr76u5ewtwc45354t5hyvryh"
    }

  },

  "login": {

    "url": "http://localhost:3000/login",

    "request": {
      "email_id": "developers@yapsody.com",
      "password": "Yapsody_123"
    },

    "response": {
      "message": "Logged in Successfully.",
      "token": "234rfregedgdrh5vyrth 546756uvjyhdrgfvsvfcesfdzszsddcsvrgddr"
    }

  },

  "create": {

    "url": "http://localhost:3000/create",

    "request": {
      "data": {
        "venues": [{
          "name": "Yapsody",
          "code": "YPS",
          "status": "active",
          "timezone": "America/Phoenix",
          "events": [{
            "title1": "Cultural Fest Carnival",
            "title2": "Reserved Event",
            "location": "Borivali",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2016-10-23 13:00:00",
              "show_end_datetime": "2017-01-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 200
            }]
          }, {
            "title1": "test event",
            "title2": "General Admission",
            "location": "Kandivali",
            "location_type": "Web",
            "status": "inactive",
            "performances": [{
              "show_start_datetime": "2018-11-20 13:00:00",
              "show_end_datetime": "2019-02-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 100
            }, {
              "show_start_datetime": "2018-12-20 13:00:00",
              "show_end_datetime": "2019-02-03 23:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 50
            }]
          }]
        }, {
          "name": "Carnival",
          "code": "CRN",
          "status": "inactive",
          "timezone": "Asia/Kolkata",
          "events": [{
            "title1": "The Wolf RS",
            "title2": "Test event",
            "location": "Malad (East)",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2018-01-11 13:00:00",
              "show_end_datetime": "2019-12-01 21:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 400
            }, {
              "show_start_datetime": "2018-01-12 10:00:00",
              "show_end_datetime": "2019-01-03 21:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 100
            }, {
              "show_start_datetime": "2018-11-01 14:00:00",
              "show_end_datetime": "2019-04-03 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 300
            }]
          }]
        }]
      }
    },

    "response": {
      "data": {
        "venues": [{
          "name": "Yapsody",
          "code": "YPS",
          "status": "active",
          "timezone": "America/Phoenix",
          "events": [{
            "title1": "Cultural Fest Carnival",
            "title2": "Reserved Event",
            "location": "Borivali",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2016-10-23 13:00:00",
              "show_end_datetime": "2017-01-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 200
            }]
          }, {
            "title1": "test event",
            "title2": "General Admission",
            "location": "Kandivali",
            "location_type": "Web",
            "status": "inactive",
            "performances": [{
              "show_start_datetime": "2018-11-20 13:00:00",
              "show_end_datetime": "2019-02-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 100
            }, {
              "show_start_datetime": "2018-12-20 13:00:00",
              "show_end_datetime": "2019-02-03 23:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 50
            }]
          }]
        }, {
          "name": "Carnival",
          "code": "CRN",
          "status": "inactive",
          "timezone": "Asia/Kolkata",
          "events": [{
            "title1": "The Wolf RS",
            "title2": "Test event",
            "location": "Malad (East)",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2018-01-11 13:00:00",
              "show_end_datetime": "2019-12-01 21:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 400
            }, {
              "show_start_datetime": "2018-01-12 10:00:00",
              "show_end_datetime": "2019-01-03 21:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 100
            }, {
              "show_start_datetime": "2018-11-01 14:00:00",
              "show_end_datetime": "2019-04-03 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 300
            }]
          }]
        }]
      }
    }

  },

  "update": {

    "url": "http://localhost:3000/update/{venue_id}",

    "request": {
      "data": {
        "venues": [{
          "name": "Yapsody Entertainment",
          "code": "YPS",
          "status": "active",
          "timezone": "America/Phoenix",
          "events": [{
            "title1": "Cultural Fest Carnival",
            "title2": "Reserved Event",
            "location": "Borivali",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2016-10-23 13:00:00",
              "show_end_datetime": "2017-01-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 200
            }]
          }, {
            "title1": "test event",
            "title2": "General Admission",
            "location": "Kandivali",
            "location_type": "Web",
            "status": "inactive",
            "performances": [{
              "show_start_datetime": "2018-11-20 13:00:00",
              "show_end_datetime": "2019-02-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 100,
            }, {
              "show_start_datetime": "2018-12-20 13:00:00",
              "show_end_datetime": "2019-02-03 23:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 50,
              "update": 1
            }],
            "update": 1
          }],
          "update": 1
        }, {
          "name": "Carnival",
          "code": "CRN",
          "status": "inactive",
          "timezone": "Asia/Kolkata",
          "events": [{
            "title1": "The Wolf RS",
            "title2": "Test event",
            "location": "Malad (East)",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2018-01-11 13:00:00",
              "show_end_datetime": "2019-12-01 21:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 400
            }, {
              "show_start_datetime": "2018-01-12 10:00:00",
              "show_end_datetime": "2019-01-03 21:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 100
            }, {
              "show_start_datetime": "2018-11-01 14:00:00",
              "show_end_datetime": "2019-04-03 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 300
            }]
          }],
          "update": 0
        }]
      }
    },

    "response": {
      "data": {
        "venues": [{
          "name": "Yapsody Entertainment",
          "code": "YPS",
          "status": "active",
          "timezone": "America/Phoenix",
          "events": [{
            "title1": "Cultural Fest Carnival",
            "title2": "Reserved Event",
            "location": "Borivali",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2016-10-23 13:00:00",
              "show_end_datetime": "2017-01-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 200
            }]
          }, {
            "title1": "test event",
            "title2": "General Admission",
            "location": "Kandivali",
            "location_type": "Web",
            "status": "inactive",
            "performances": [{
              "show_start_datetime": "2018-11-20 13:00:00",
              "show_end_datetime": "2019-02-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 100,
            }, {
              "show_start_datetime": "2018-12-20 13:00:00",
              "show_end_datetime": "2019-02-03 23:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 50,
              "update": 1
            }],
            "update": 1
          }],
          "update": 1
        }, {
          "name": "Carnival",
          "code": "CRN",
          "status": "inactive",
          "timezone": "Asia/Kolkata",
          "events": [{
            "title1": "The Wolf RS",
            "title2": "Test event",
            "location": "Malad (East)",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2018-01-11 13:00:00",
              "show_end_datetime": "2019-12-01 21:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 400
            }, {
              "show_start_datetime": "2018-01-12 10:00:00",
              "show_end_datetime": "2019-01-03 21:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 100
            }, {
              "show_start_datetime": "2018-11-01 14:00:00",
              "show_end_datetime": "2019-04-03 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 300
            }]
          }],
          "update": 0
        }]
      }
    }

  },

  "get": {

    "url": "http://localhost:3000/get?limit=10&skip=0&status=active",

    "response": {
      "data": {
        "venues": [{
          "name": "Yapsody",
          "code": "YPS",
          "status": "active",
          "timezone": "America/Phoenix",
          "events": [{
            "title1": "Cultural Fest Carnival",
            "title2": "Reserved Event",
            "location": "Borivali",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2016-10-23 13:00:00",
              "show_end_datetime": "2017-01-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 200
            }]
          }, {
            "title1": "test event",
            "title2": "General Admission",
            "location": "Kandivali",
            "location_type": "Web",
            "status": "inactive",
            "performances": [{
              "show_start_datetime": "2018-11-20 13:00:00",
              "show_end_datetime": "2019-02-01 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 100
            }, {
              "show_start_datetime": "2018-12-20 13:00:00",
              "show_end_datetime": "2019-02-03 23:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 50
            }]
          }]
        }, {
          "name": "Carnival",
          "code": "CRN",
          "status": "inactive",
          "timezone": "Asia/Kolkata",
          "events": [{
            "title1": "The Wolf RS",
            "title2": "Test event",
            "location": "Malad (East)",
            "location_type": "Physical",
            "status": "active",
            "performances": [{
              "show_start_datetime": "2018-01-11 13:00:00",
              "show_end_datetime": "2019-12-01 21:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 400
            }, {
              "show_start_datetime": "2018-01-12 10:00:00",
              "show_end_datetime": "2019-01-03 21:00:00",
              "sale_start": "immediate",
              "status": "inactive",
              "ticket_capacity": 100
            }, {
              "show_start_datetime": "2018-11-01 14:00:00",
              "show_end_datetime": "2019-04-03 23:00:00",
              "sale_start": "immediate",
              "status": "active",
              "ticket_capacity": 300
            }]
          }]
        }],
        "pagination": {
          "limit": 10,
          "skip": 0,
          "total": 2,
          "current_page": 1,
          "total_page": 1
        }
      }
    }

  }

};


module.exports = { dataPoints }