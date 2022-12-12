import { Component, Host, h} from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';
const Router = createRouter();
@Component({
  tag: 'libe-router'
})
export class LibeRouter {
    render() {
        return (
            <Host>
                <Router.Switch>
                    
                    <Route path='/'>
                        <admin-login/>
                    </Route>
                    <Route path='/home'>
                        <admin-dashboard/>
                    </Route>
                    <Route path='/signup'>
                        <admin-signup/>
                    </Route>
                    <Route path='/login'>
                         <admin-login/>
                    </Route>
                    <Route path='/report'>
                         <admin-report/>
                    </Route>
                    <Route path='/teacher/form'>
                        <admin-teacher/>
                    </Route>
                    <Route path='/teacher/show'>
                        <admin-teacher-show/>
                    </Route>
                    <Route path='/student/form'>
                        <admin-student/>
                    </Route>
                    <Route path='/student/show'>
                        <admin-student-show/>
                    </Route>
                    <Route path='/subject/form'>
                        <admin-subject/>
                    </Route>
                    <Route path='/subject/show'>
                        <admin-subject-show/>
                    </Route>
                    <Route path='/teacher/home'>
                        <teacher-background/>
                    </Route>
                    <Route path='/teacher/student'>
                        <teacher-student/>
                    </Route>
                    <Route path='/teacher/report'>
                        <teacher-report/>
                    </Route>
                    <Route path='/teacher/profile'>
                        <teacher-profile/>
                    </Route>
                    <Route path='/teacher/login'>
                        <teacher-login/>
                    </Route>
                    <Route path='/teacher/signup'>
                        <teacher-signup/>
                    </Route>
                    <Route path='/student/home'>
                        <student-background/>
                    </Route>
                    <Route path='/student/login'>
                        <student-login/>
                    </Route>
                    <Route path='/student/report'>
                        <student-report/>
                    </Route>
                    <Route path='/student/profile'>
                        <student-profile/>
                    </Route>
                    <Route path='/student/signup'>
                        <student-signup/>
                    </Route>
                  
                    </Router.Switch>
            </Host>)}
            }