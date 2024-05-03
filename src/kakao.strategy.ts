// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { PassportStrategy } from '@nestjs/passport';
// import { Profile, Strategy } from 'passport-kakao';

// export class KakaoProvider {
//   constructor(
//     public readonly clientID: string,
//     public readonly response_type: string,
//     public readonly clientSecret: string,
//     public readonly callbackURL: string
//   ) {}
// }

// @Injectable()
// export class KakaoStrategy extends PassportStrategy(Strategy) {
//   constructor(provider?: KakaoProvider) {
//     super({
//       response_type: 'code',
//       clientID: provider.clientID || '0',
//       clientSecret: '',
//       callbackURL: provider.callbackURL || ''
//     });
//   }

//   async validate(accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) {
//     try {
//       const user = {
//         kakaoId: profile._json.id,
//         kakaoAccessToken: accessToken,
//         userName: profile.username,
//         displayNmae: profile.displayName,
//         _raw: profile._raw
//       };
//       done(null, user);
//     } catch (e) {
//       done(e);
//     }
//   }
// }

// @Injectable()
// export class KakaoCustomGuard implements CanActivate {
//   constructor(private kakaoConfigService: ConfigService) {}
//   async canActivate(context: ExecutionContext) {
//     const req = context.switchToHttp().getRequest();

//     const appKey = req.query.appKey;
//     if (appKey === 'WCLUB') {
//       new KakaoStrategy({
//         response_type: 'code',
//         clientID: this.kakaoConfigService.get('PASSPORT_WCLUB_KAKAO_CLIENT_ID'),
//         clientSecret: '',
//         callbackURL: this.kakaoConfigService.get('PASSPORT_KAKAO_REDIRECT_URL')
//       });
//     } else if (appKey === 'DOLSINGS') {
//       new KakaoStrategy({
//         response_type: 'code',
//         clientID: this.kakaoConfigService.get('PASSPORT_WCLUB_KAKAO_CLIENT_ID'),
//         clientSecret: '',
//         callbackURL: this.kakaoConfigService.get('PASSPORT_KAKAO_REDIRECT_URL')
//       });
//     }
//     return true;
//   }
// }
