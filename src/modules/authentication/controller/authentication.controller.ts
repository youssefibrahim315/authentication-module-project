// authentication.controller.ts
import { Controller, Post, Body, Req, Get } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { Request } from 'express';

@Controller('auth')
export class AuthenticationController {
    constructor(private authenticationService: AuthenticationService) { }
    @Post('register')
    async register(@Req() req:Request) {
        console.log("🚀 ~ file: authentication.controller.ts:10 ~ AuthenticationController ~ register ~ req", req)
        // return this.authenticationService.register(email, password);
    }
    @Post('login')
    async login(@Body() body:any) {
        // return 'login'
        return this.authenticationService.login(body.email, body.password);
    }
}