# LoonSign Docs

LoonSign Docs is a private-alpha Canadian e-signature service that allows users to upload PDFs, place signature boxes, email signer links, store signed PDFs in AWS ca-central-1, and bill CA $12/year via Stripe.

## Features

- PDF upload and signature box placement
- Email signer links
- Storage of signed PDFs in AWS ca-central-1
- Billing via Stripe

## Architecture

- Front-end: React (TypeScript, Material UI)
- Auth: Amazon Cognito (email = username)
- Back-end: AWS SAM (Python 3.12 Lambdas) behind API Gateway
- Signing engine: DocuSeal v0.24 run as a black-box micro-service in ECS Fargate
- Storage: S3 (bucket `loonsign-docs-sbx`, SSE-KMS)
- DB: DynamoDB (`Envelopes` table)
- Email: Amazon SES in ca-central-1
- CI/CD: GitHub Actions → sandbox AWS account
- Domain: `app.loonsigndocs.ca` (CloudFront + ACM)

## Getting Started

To get started with LoonSign Docs, follow the instructions in the [runbook](docs/runbook.md).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
