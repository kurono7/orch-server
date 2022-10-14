const CONTEXT_VARIABLES = [
  'public-options',
  'public-image',
  'public-images',
  'public-link',
  'public-markdown',
  'public-video',
  'public-caso',
  'public-todosCasos',
  'public-rangofecha',
  'public-respuesta',
  'public-redes',
  'public-documento',
  'public-zona',
  'public-twitter',
  'public-periodico',
  'public-indiciado'
];

const CONTEXT_ACTIONS = ['generic','privacy_policy', 'twitter'];

export const addCardIfVariableFound = (resContext, variables) => {
  CONTEXT_VARIABLES.forEach((contextVariable) => {
    if (resContext && resContext[contextVariable]) {
      variables[contextVariable] = JSON.stringify(resContext[contextVariable]);
    }
  });
};

export const addCardIfActionFound = (resContext, variables) => {
  console.log("entra"+JSON.stringify(resContext))
  CONTEXT_ACTIONS.forEach((contextAction) => {
    if (resContext && resContext['action'] === contextAction) {
      if (resContext.parameters) {
        const { data } = resContext.parameters;
        const actionVariable = {
          data: { parameters: data },
          component: contextAction,
        };
        variables[`public-${contextAction}`] = JSON.stringify(actionVariable);
      }
    }
  });
};
