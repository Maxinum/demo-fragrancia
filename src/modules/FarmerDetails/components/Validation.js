export function ClientValidation(client, perf, cons, payments) {
  let check = true;

  if (client === '') {
    return false;
  } else if (perf[0].name === '' && cons[0].name === '' && payments[0].score === '') {
    return false;
  }

  for (let i = 0; i < perf.length; i++) {
    if (perf[i].name !== '') {
      if (perf[i].volume === '') {
        check = false;
        break;
      } else if (perf[i].price === '') {
        check = false;
        break;
      }
    }
  }

  for (let i = 0; i < cons.length; i++) {
    if (cons[i].name !== '') {
      if (cons[i].volume === '') {
        check = false;
        break;
      } else if (cons[i].price === '') {
        check = false;
        break;
      }
    }
  }

  for (let i = 0; i < payments.length; i++) {
    if (payments[i].sum !== '') {
      if (payments[i].score === '') {
        check = false;
        break;
      }
    }
  }

  if (check) {
    return true;
  } else {
    return false;
  }
}