#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CdkCicdPipelineStack } from '../lib/cdk-cicd-pipeline-stack';

const app = new cdk.App();
new CdkCicdPipelineStack(app, 'CdkCicdPipelineStack', {
});
