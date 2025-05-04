# LoonSign Docs Run-book

This run-book provides instructions for managing the LoonSign Docs service.

## Starting/Stopping DocuSeal

To start DocuSeal:
1. Navigate to the `services/docuseal` directory.
2. Run `./deploy_docuseal.sh` to deploy the service to ECS Fargate.

To stop DocuSeal:
1. Navigate to the AWS ECS console.
2. Locate the DocuSeal service and stop the tasks.

## Rotating Keys

To rotate keys:
1. Update the keys in the AWS KMS console.
2. Update the environment variables in the Lambda functions and DocuSeal configuration.

## Restoring the Database

To restore the DynamoDB database:
1. Navigate to the AWS DynamoDB console.
2. Use the backup and restore feature to restore the `Envelopes` table.

## Handling SES Bounces

To handle SES bounces:
1. Monitor the SES bounce notifications.
2. Update the email addresses in the user pool if necessary.

