import React from 'react';
import styles from './Projects.module.scss';
import Project from './Project/Project';
import Title from "../../common/components/Title/Title";
import Fade from 'react-reveal/Fade'
import counterIMG from '../../assets/counter.png'
import socialIMG from '../../assets/socialnetimg.jpg'
import todoIMG from '../../assets/todoimg.jpg'

class Projects extends React.Component {
    state ={
        title: "Мои проекты",
        project: [
            {title: 'To Do List', projectImg: todoIMG, description:'Приложение для создания своего списка дела, незаменимая вещь, особенно если часто забываешь что-то сделать.', ghPages:'https://StrikerXx798.github.io/to_do_list/'},
            {title: 'Counter', projectImg:counterIMG, description:'Классический счетчик кликов, с возможностью настройки максимального и минимального числа.', ghPages:'https://StrikerXx798.github.io/counter/'},
            {title: 'Social Network', projectImg:socialIMG, description:'Большая социальная социальная сеть с подгружаемым с сервера списком пользователей.', ghPages:'https://Strikerxx798.github.io/social-site/'},
        ]
    }

    render = () => {
        let project = this.state.project.map(p => {
            return <Project title={p.title} projectImg={p.projectImg} description={p.description} ghPages={p.ghPages}/>
        })
        return (
            <div id='projects' className = {styles.projects}>
                <Fade bottom>
                    <div className = {styles.container}>
                        <Title title={this.state.title}/>
                        <div className = {styles.projectsSet}>
                            {project}
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}



export default Projects;