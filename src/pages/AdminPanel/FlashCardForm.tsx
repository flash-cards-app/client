import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Input from '@material-ui/core/Input';

enum Difficulty {
  'junior',
  'mid',
  'senior',
  'master',
}

interface IFormInput {
  question: string;
  answer: string;
  language: string;
  type: string;
  difficult: Difficulty;
}
const { control, handleSubmit } = useForm<IFormInput>();
const onSubmit: SubmitHandler<IFormInput> = (data) => {
  console.log(data);
};

const FlashCardForm = () => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Controller
      name="question"
      control={control}
      defaultValue=""
      render={({ field }) => <Input {...field} />}
    />
    <Controller
      name="answer"
      control={control}
      defaultValue=""
      render={({ field }) => <Input {...field} />}
    />
    <Controller
      name="language"
      control={control}
      defaultValue=""
      render={({ field }) => <Input {...field} />}
    />
    <Controller
      name="type"
      control={control}
      defaultValue=""
      render={({ field }) => <Input {...field} />}
    />
  </form>
);

export default FlashCardForm;
