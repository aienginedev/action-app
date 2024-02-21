import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import useConfig from './use-config'
import { mockData } from './mock'
import { CodeLanguage } from './types'
import VarList from '@/app/components/workflow/nodes/_base/components/variable/var-list'
import AddButton from '@/app/components/base/button/add-button'
import Field from '@/app/components/workflow/nodes/_base/components/field'
import Split from '@/app/components/workflow/nodes/_base/components/split'
import CodeEditor from '@/app/components/workflow/nodes/_base/components/editor/code-editor'
import TypeSelector from '@/app/components/workflow/nodes/_base/components/editor/type-selector'
const i18nPrefix = 'workflow.nodes.code'

const codeLanguages = [
  {
    label: 'Python3',
    value: CodeLanguage.python3,
  },
  {
    label: 'JavaScript',
    value: CodeLanguage.javascript,
  },
]
const Panel: FC = () => {
  const { t } = useTranslation()
  const readOnly = false

  const {
    inputs,
    handleVarListChange,
    handleAddVariable,
    handleCodeChange,
    handleCodeLanguageChange,
  } = useConfig(mockData)
  return (
    <div className='mt-2 px-4 space-y-4'>
      <Field
        title={t(`${i18nPrefix}.inputVars`)}
        operations={
          <AddButton onClick={handleAddVariable} />
        }
      >
        <VarList
          readonly={readOnly}
          list={inputs.variables}
          onChange={handleVarListChange}
        />
      </Field>
      <Split />
      <CodeEditor
        title={
          <TypeSelector
            list={codeLanguages}
            value={inputs.code_language}
            onChange={handleCodeLanguageChange}
          />
        }
        value={inputs.code}
        onChange={handleCodeChange}
      />
      <Split />
    </div>
  )
}

export default Panel
