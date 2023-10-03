/** @format */

let githubLogin = "yh919";
let linkedinUserName = "youssefhussein919";
let facebookUserName = "yuuxv";
let twitterUserName = "falconshittalks";

export default function Social() {
  return (
    <div>
      <div className='myInformation'>
        <h3>Visit my websites</h3>
      </div>
      <div className='buttons'>
        <button className='links github-link'>
          <a
            href={`https://github.com/${githubLogin}`}
            target='_blank'
            className='button-a'>
            Github
          </a>
        </button>
        <button className='links facebook-link'>
          <a
            href={`https://facebook.com/${facebookUserName}`}
            target='_blank'
            className='button-a'>
            Facebook
          </a>
        </button>
        <button className='links linkedin-link'>
          <a
            href={`https://linkedin.com/in/${linkedinUserName}`}
            target='_blank'
            className='button-a'>
            Linkedin
          </a>
        </button>
        <button className='links twitter-link'>
          <a
            href={`https://twitter.com/${twitterUserName}`}
            target='_blank'
            className='button-a'>
            Twitter (X)
          </a>
        </button>
        <button className='links github-link'>
          <a
            href={`http://github.com/${githubLogin}/tic-tac-toe`}
            target='_blank'
            className='button-a'>
            Project Repositery
          </a>
        </button>
      </div>
    </div>
  );
}
