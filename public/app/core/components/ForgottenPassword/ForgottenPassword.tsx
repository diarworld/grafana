import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { Legend, Container, useStyles2, LinkButton } from '@grafana/ui';
import config from 'app/core/config';

const paragraphStyles = (theme: GrafanaTheme2) => css`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.bodySmall.fontSize};
  font-weight: ${theme.typography.fontWeightRegular};
  margin-top: ${theme.spacing(1)};
  display: block;
`;

export const ForgottenPassword = () => {
  const styles = useStyles2(paragraphStyles);
  const loginHref = `${config.appSubUrl}/login`;

  return (
    <div>
      <Legend>Забыли пароль?</Legend>
      <p className={styles}>
        Это пароль с помощью которого вы входите в компьютер. Если вы его забыли - напишите на 900.
      </p>

      <Container margin="md" />
      <LinkButton variant="primary" href={loginHref}>
        Назад на страницу логина
      </LinkButton>
    </div>
  );
};
