echo Building Next.js app... && \
npm run build && \
export AWS_EB_PROFILE=welder && \
npm run deploy-eb