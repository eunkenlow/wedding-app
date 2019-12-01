/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
// styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// components
import Article from './Article';

const Articles = ({ displayId, onClose, active }) => {
  return (
    <div id="main">
      <Article id="info" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">Info</h2>
          <h3 className="major">Where is it located?</h3>
          <p>
            Jeeva Saba Bali Estate is located on the beach at Pantai Saba approximately 40 minutes
            from the Bali airport. It is near the town of Blah Batu in Gianyar regency and is 11 km
            from the tourist area of Sanur and a 45-minute drive from the main tourist areas in Kuta
            and Seminyak.
          </p>
          <h3 className="major">Distances</h3>
          <ul>
            <li>Sanur 11 km</li>
            <li>Ubud 20 km</li>
            <li>Airport 30 km</li>
            <li>Seminyak 25 km</li>
            <li>Padang Bai 27 km</li>
            <li>Candi Dasa 30 km</li>
          </ul>
          <h3 className="major">Accommodation</h3>
          <p>We will be having a shuttle.</p>
          <h3 className="major">Dress Code</h3>
          <h4>What is the Dress Code?</h4>
          <p>Beach cocktail</p>
          <h4>What is beach cocktail...is that a thing or did you just make it up?</h4>
          <p>It’s a thing...according to the internet.</p>
          <h4>Heels needed? I intend to shake my tail feathers!</h4>
          <p>
            Great question Shakira. If you do, wear wedges and not spikey heels since you’ll be
            walking on grass.
          </p>
          <h4>What’s the stance on flip-flops / thongs?</h4>
          <blockquote>
            James: “I once saw a truckie sporting pluggers (flip flops) climb over his trailor to
            tie down a load like a nimble goat - but he had years of experience. Agility aint an
            overnight trait.”
          </blockquote>
          <p>Not very accommodating. Aka, we don’t want</p>
          <h4>Are any colors not recommended or non-preferred?</h4>
          <p>You do you!</p>
        </>
      </Article>
      <Article id="rsvp" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">RSVP</h2>
          <form method="post" action="#">
            <div className="fields">
              <div className="field half">
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" />
              </div>
              <div className="field half">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" />
              </div>
              <div id="attendance" className="field">
                <label htmlFor="attendance">I’ll be there!</label>
                <input id="attending" type="radio" value="yes" name="attendance" />
                <label htmlFor="attending">
                  <span className="circle">
                    <span className="icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </span>
                  Heck yes :)
                </label>
                <input id="not-attending" type="radio" value="no" name="attendance" />
                <label htmlFor="not-attending">
                  <span className="circle">
                    <span className="icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </span>
                  Sadly no :(
                </label>
              </div>
              <div className="field">
                Su-Zen being Malaysian loves a good rando at a party, however unfortunately due to
                the size of the venue we regret we will not be able to accommodate +1s :(
              </div>
              <div className="field">
                <label htmlFor="dietary">Dietary requirements?</label>
                <textarea
                  placeholder="Enter any special dietary requirements"
                  name="dietary"
                  id="dietary"
                  rows="4"
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field half">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </div>
              <div id="notification" className="field">
                <label htmlFor="notification">
                  Are you a forgetful fairy? Would like us to send you notifications on the lead up
                  to the wedding
                </label>
                <input id="notify" type="radio" value="yes" name="notification" />
                <label htmlFor="notify">
                  <span className="circle">
                    <span className="icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </span>
                  Yes
                </label>
                <input id="dont-notify" type="radio" value="no" name="notification" />
                <label htmlFor="dont-notify">
                  <span className="circle">
                    <span className="icon">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </span>
                  No
                </label>
              </div>
              <div className="field">
                <label htmlFor="memory">
                  Tell us, what is your favourite memory, funniest moment or favourite thing about
                  Suz and/or James
                </label>
                <textarea
                  placeholder="I once saw su-zen sit on doggy poop"
                  name="memory"
                  id="memory"
                  rows="4"
                />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Submit" className="primary" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
        </>
      </Article>
      <Article id="schedule" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">SCHEDULE</h2>
          <h3 className="major">What’s going down on the day?</h3>
          <ul className="schedule-list">
            <li>16:00 pm - Guest arrival at Jeeva Saba</li>
            <li>16:30 pm - Ceremony</li>
            <li>17:00 pm - Cocktails and Canapes</li>
            <li>18:45 pm - Reception </li>
          </ul>
          <h3 className="major">Other Events</h3>
          <h4>Gate Crash</h4>
          <p>
            The gate crash is a Chinese tradition of ‘winning the bride’. The bridal party and the
            bride’s female relatives 伴娘 – bàn niáng” will set up a series of tasks and challenges
            that the groom “新郎 – xīn láng” and his groomsmen “伴郎 – bàn láng” will have to go
            through before the groom is allowed to receive the bride.
          </p>
          <p>
            Expect costumes, challenges bordering on sadism, hardcore bargaining and a fair share of
            questionable performances.
          </p>
          <p>
            We welcome any of our guests to come and witness the fun! Please let us know here if you
            would like to attend and watch the gate crash.{' '}
          </p>
        </>
      </Article>
      <Article id="gifts" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">Gifts</h2>
          <p>
            Please do not feel that you need to give us anything - we are beyond grateful just to
            have you there. But if you would like to contribute something, you can bring a red
            packet on the day of the wedding or send us on our way to a honeymoon!
          </p>
        </>
      </Article>
      <Article id="fun" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">FUN</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim
            arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
            fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus
            ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras
            viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
          </p>
        </>
      </Article>
    </div>
  );
};

Articles.defaultProps = {
  displayId: null,
  active: false,
};

Articles.propTypes = {
  displayId: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Articles;
