# Konnectors

[![Build Status](https://travis-ci.org/cozy-labs/konnectors.svg)](https://travis-ci.org/cozy-labs/konnectors)

Collection of connectors to fetch data from different websites and save them
into your Cozy.

If you want to build your own connector, here is [a complete documentation](https://github.com/cozy-labs/konnectors/wiki)

# Available connectors

*Bills*

* Bouygues Telecom (Bill PDFs)
* Bouygues Box (Bill PDFs)
* Digital Ocean (Bill PDFs)
* Electrabel (Bill PDFs)
* Free (Bill PDFs)
* Free Mobile (Bill PDFs)
* Numericable (Bill PDFs)
* Online.net (Bill PDFs)
* Orange (Bill PDFs)
* Sosh (Bill PDFs)

*Internet Of Things*

* Jawbone (Move and Sleep data)
* Nest (temperatures)
* Withings (Weight, Heartbeat and Blood Presure data)

*Social*

* Github (commits)
* Twitter (published tweets)
* Linkedin (contact information)

*Calendar*

* Ical Feed (events)
* Contact Birthdays (events)

*Productivity*

* RescueTime (activities)

# What we would like to see

* weather tracker: store your location and track temperature and pluviometry.

# Build

To build this application:

    npm install
    npm run build

# Tests

To run tests type the following command into the app folder:

    npm test

In order to run the tests, you must only have the Data System started.
