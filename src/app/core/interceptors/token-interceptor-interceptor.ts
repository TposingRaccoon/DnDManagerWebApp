import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  if(localStorage.getItem('TOKEN')) {
    req = req.clone({ setHeaders: { Authorization: 'Bearer ' +  localStorage.getItem('TOKEN')} })
  }

  return next(req);
};
