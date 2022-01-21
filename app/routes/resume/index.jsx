export default function Resume() {
    return (
        <div>
            <h1>Resumé</h1>
            <div>
                <h2>Senior Software Engineer - Sharpr Platform</h2>
                <h3>Dynata</h3>
                <time>Sep 2020 - Present</time>
                <ul>
                    <li>Redid the entire main page of our app into React</li>
                    <li>Implemented faceted search in our app</li>
                </ul>
            </div>
            <div>
                <h2>
                    Software Engineer
                </h2>
                <h3>Sharpr - Full-time</h3>
                <time>Aug 2019 - Sep 2020</time>
                <ul>
                    <li>Migrated a large portion our frontend code from AngularJS to React as one of two engineers working on the project</li>
                    <li>Setup AWS lambda functions, using the Serverless framework and Elasticsearch. These functions ingested large amount of scraped data from the web and exposed an API to our frontend to consume</li>
                    <li>Implemented translation in our app. This would take in any posts and attachments and translate them into the desired language</li>
                    <li>Created and maintained backend API in PHP</li>
                </ul>
            </div>
            <div>
                <h2>Software Engineer</h2>
                <h3>Progressive Leasing</h3>
                <time>Aug 2018 - Aug 2019</time>
                <ul>
                    <li>Used Angular to implement a redesign of the Esign Checkout portal</li>
                    <li>Created and maintained API endpoints in .NET CORE backend</li>
                    <li>Increased unit test coverage from 20% to 80% of the team's frontend code</li>
                    <li>Helped move teams backend to a microservices architecture</li>
                </ul>
            </div>
            <div>
                <h2>Manufacturing Process Engineer</h2>
                <h3>L3 Technologies</h3>
                <time>Jan 2017 - Jun 2018</time>
                <ul>
                    <li>Developed a virtual "toolbox" application using VB.NET which over 160 people used to access their commonly used applications.</li>
                    <li>Created an excel/VBA connected to a SQL database to enable assemblers to quickly identify common defects. -- I was selected to present this project in front of all the other interns and executives </li>
                </ul>
            </div>
        </div>
    );
}