require([
		'lib/zombular/body',
	],
    function (z) {

		var CurrentPage = []

		Main_Page();

		function tmpl (title, text) {
			return [z('div.headers', title),
					z('div.textwrap',
						z('div.text',
							text
						)
					),
					z("br")]
		}

        function GoogleAnalytics() {
            return z('script', `
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-72372263-1', 'auto');
                ga('send', 'pageview');
            `)
        }
        function STYLE() {
            return z('style', `
                .headers {
					font-size: 32px; font-weight: bold; text-align: center;
				}
                .text {
					width: 600px; font-size: 22px; margin-left: auto; margin-right: auto;
				}
                .textwrap {
					horizontal-align: middle;
				}
                `
            );
        }

		function Release_Note() {
			document.title = 'Release notes v0.4.0';
			CurrentPage = [
				z('h1', 'Release notes v0.4.0'),
				z('h2', 'Summary'),
				z('p',
					z('', 'It was a long way, but the 0.4.0 version is finally finished. It took almost 9 months in order to close all issues in the milestone. The two most time-consuming issues were '),
					z({is:'a', href:'https://github.com/griefly/griefly/issues/197'}, 'atmos rework'),
					z('', ' and '),
					z({is:'a', href:'https://github.com/griefly/griefly/issues/201'}, 'new serialization system'),
					z('', '. During the development internet stranges have started to show some interest in the project and have made various pull requests. Special thanks to '),
					z({is:'a', href:'https://github.com/shelltitan'}, 'shelltitan'),
					z('', ' who almost single-handedly has made all new gameplay features.')
				),
				z('h2', 'Changelog'),
				z('h3', 'Main technical changes'),
				z('ol',
					z('li', 'Unit tests were introduced (~18% coverage for the final release build).'),
					z('li', 'SDL library was finally dropped.'),
					z('li', 'World serialization was greatly improved (~100 times faster than before).')
				),
				z('h3', 'Main gameplay changes'),
				z('ol',
					z('li', 'Atmos has been reworked, so it is possible to create relatively big maps now. However, there are still plenty of options available for optimization.'),
					z('li', 'Basic guns & projectiles system.'),
					z('li', 'Basic interactions with items (pull, look, rotate).'),
					z('li', 'Basic medicine system.'),
					z('li', 'Tables.'),
					z('li', 'Big map.')
				),
				z('p',
					'Full changelog can be found ',
					z({is:'a',  href:'https://github.com/griefly/griefly/milestone/5?closed=1'}, 'here'),
					z('', '.')
				),
				z('h2', z('a', 'Future')),
				z('p', 'The v0.4.0 beta-test will be conducted and the results will determine the path of the further development. If network will work correctly then it will be considered to make the v0.5.0 milestone more gameplay oriented. However, it is important to continue improving the game engine because in long term it is more efficient. So the v0.5.0 milestone planning is a separate hard task, and it will be done later.')
			]
			z.update();
		}

		function Main_Page() {
			document.title = 'Griefly: Yet Another Space Station Remake';
			CurrentPage = [
				tmpl(
					'What is Griefly?',
					z('',
						'Griefly is a ',
						z({is:"a", href:"http://www.byond.com/games/exadv1/spacestation13"}, 'Space Station 13'),
						' remake. It is not a remake that will turn Space Station into a 3D shooter, MMORPG, etc. It is more like a remake of the engine - BYOND. The current main goal is to replicate Space Station 13 without lag.'
					)
				),
				tmpl(
					'Why?',
					'The main problem of Space Station is that it is written in BYOND. This language is actually not that bad, but it is not fit for the Space Station requirements. It is really easy to create something with this language, but is incredibly slow. It is impossible to make fun, complicated, and non-laggy stuff like atmos or the singularity for Space Station 13. Space Station (or anything based on it) on BYOND will always be laggy.'
				),
				tmpl(
					'Where?',
					z('',
						'The repository is located on ',
						 z({is:"a", href:"https://github.com/griefly/griefly"}, 'Github'),
						 '. Pull requests are welcome.'
					 )
				),
				tmpl(
					'When?',
					z('',
						'The version 0.4.0 is ',
						z({is:'a', href:"https://github.com/griefly/griefly/releases/tag/v0.4.0"} , 'released'),
						'. The release notes can be found ',
						z({is: 'a', href:"#release", onclick:Release_Note}, 'here'),
						'. The open beta-test was held.',
						z('br'),
						'Current milestone is ',
						z({is:'a', href:"https://github.com/griefly/griefly/milestone/6"}, 'v0.5.0'),
						z('', '.')
					)
				),
				z({is:'div', style:'margin-top: .5em'},
					tmpl('',
						z('',
							'Maybe you have found a mistake on this website? Feel free to create a pull request or an issue ',
							z({is:'a', href:"https://github.com/griefly/griefly-site"}, 'here'),
							z('', '.')
						)
					),
					tmpl('',
						z('',
							'Contact e-mail: ',
							z({is:'a', href:'mailto:lagius@grief.ly'}, 'lagius@grief.ly')
						)
					)
				)
			]
			z.update();
		}

        function Body() {
            return z('',
                    STYLE(),
                    GoogleAnalytics(),
					CurrentPage

			);
        }

        z.setBody(Body)
    }
)
