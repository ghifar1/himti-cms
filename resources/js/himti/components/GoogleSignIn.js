import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
    '349329186927-jn2f3u8i0ghjmjq0jmbngua5aaqodkvi.apps.googleusercontent.com',
    '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',
    'https://himti-cms.id/api/auth/google/callback'
)

const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
]

const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
})
