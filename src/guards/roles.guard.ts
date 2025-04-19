import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { log } from 'console';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/user/decorators/roles.decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector) {}

  canActivate(context: ExecutionContext,): boolean {
    let roles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    let r = context.switchToHttp().getRequest();
    if(!roles.length){
      return true;
  }
  if(roles.includes(r['user-role'])){
    return true
  }else{
    throw new UnauthorizedException('Sizda bu rolga ruxsat yoq')
}
  }
}