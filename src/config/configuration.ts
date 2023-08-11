import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'lodash';

const YAML_CONFIG_FILENAME = 'config.yaml';
const YAML_CONFIG_ENV_FILENAME = `config.${
  process.env.NODE_ENV || 'development'
}.yaml`;

export default () => {
  const config = loadConfig(YAML_CONFIG_FILENAME);

  const envConfig = loadConfig(YAML_CONFIG_ENV_FILENAME);

  return _.merge(config, envConfig);
};

function loadConfig(filename: string): Record<string, any> {
  return yaml.load(readFileSync(join(__dirname, filename), 'utf8'));
}
