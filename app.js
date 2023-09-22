	const {
				createApp
			} = Vue;
			const {
				createRouter,
				createWebHistory,
				createWebHashHistory
			} = VueRouter;

			const Home = {
				template: '<h2>About Me</h2> <p>My name is Ziyan Shen ,I come from China , Now I am a student at Deakin. My major is IT. After three years of study,I can do some simple C# development, Create a web page with HTML/CSS and JavaScript, During the semester I learned how to use the Vue3. I am a full time student, Also participated in a number of school-organized internships，Designed web pages for Chameleon, provided Ui and Ux design, and completed user feedback.I can speak 3 languages, so I can handle some international business in the future.My goal is toprovide a user-friendly, high-performance,and aesthetically pleasing user experience.</p>'
			};
			const About = {
				template: '<h2>Personal Information</h2><ul><li><strong>Name:</strong> Ziyan Shen</li><li><strong>Age:</strong> 23</li><li><strong>Email:</strong> shenziy@deakin.edu.is</li><li><strong>Phone:</strong> 0423713396</li><li><strong>LinkedIn:</strong> Ziyan-Shen-417567198</li></ul>'
			};
			const table = {
				template: '<table border="1" style="text-align: center;"><thead><tr><th>I enjoy</th><th>I dont enjoy </th><th>Skill(seebelowfordefinitions)</th> <th> Ihavenoability </th> <th> Ihavesomeability </th><th>Ihavestrongability</th></tr></thead><tbody><tr><td>√</td><td></td><td>Adaptability</td><td></td><td></td><td>√</td></tr><tr><td>√</td><td></td><td>Agility</td><td></td><td>√</td><td></td></tr><tr><td>√</td><td></td><td>Analysis</td><td></td><td></td><td>√</td></tr><tr><td>√</td><td></td><td>Attentiontodetail</td><td></td><td></td><td>√</td></tr><tr><td>√</td><td></td><td>Buildingrelationships</td><td></td><td>√</td><td></td></tr><tr><td>√</td><td></td><td>Communication</td><td></td><td>√</td><td></td></tr><tr><td>√</td><td></td><td>Conflictresolution</td><td></td><td></td><td>√</td></tr><tr><td>√</td><td></td><td>Continuousimprovement</td><td></td><td></td><td>√</td></tr><tr><td>√</td><td></td><td>Creativity/lnnovation</td><td></td><td>√</td><td></td></tr><tr><td></td><td>√</td><td>Criticalthinking</td><td>√</td><td></td><td></td></tr><tr><td>√</td><td></td><td>Customerservice</td><td></td><td></td><td>√</td></tr><tr><td>√</td><td></td><td>Decisionmaking</td> <td> √ </td><td></td > <td> </td></tr> <tr> <td> </td><td>√</td ><td> Delegation </td><td>√</td> <td> </td><td></td > </tr></tbody> </table>'
			};

			const routes = [{
					path: '/',
					component: Home
				},
				{
					path: '/about',
					component: About
				},
				{
					path: '/table',
					component: table
				},
			];

			const router = createRouter({
				history: createWebHashHistory(),
				routes,
			});

			const app = createApp({
				data() {
					return {
						projects: [{
								id: 1,
								title: 'Children’s Gallery website ',
								description: '',
								imgList: ['./img/11.jpg', './img/12.jpg', './img/13.jpg', './img/14.jpg']
							},
							{
								id: 2,
								title: 'Chameleon UI and UX design',
								description: '',
								imgList: ['./img/22.jpg', './img/23.jpg', './img/24.jpg', './img/25.jpg']
							},
							{
								id: 3,
								title: 'Flying Bird games',
								description: '',
								imgList: ['./img/33.jpg', './img/34.jpg']
							}
						],
						newProject: {
							title: '',
							description: ''
						}
					};
				},
				methods: {
					addProject() {
						if (this.newProject.title && this.newProject.description) {
							this.projects.push({
								id: this.projects.length + 1,
								title: this.newProject.title,
								description: this.newProject.description
							});
							this.newProject.title = '';
							this.newProject.description = '';
						}
					}
				}
			});

			app.use(router);
			app.mount('#app');