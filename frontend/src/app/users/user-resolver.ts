/*
 *
 *  * Copyright 2016-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

/**
 * @author Vitaliy Fedoriv
 */

@Injectable()
export class UserResolver  {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.getUserById(route.paramMap.get('id'));
  }

}
