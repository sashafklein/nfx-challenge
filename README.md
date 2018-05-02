# Hi NFXers!

### Getting Started

Getting this running should be pretty straightforward. In one tab:

```
cd api
bundle
rake db:create && rake db:migrate && rake db:seed
rails s
```

And in the other:

```
cd client
yarn install
yarn start
```

Then open `localhost:3000` to see the app. The API runs on `localhost:8080`.

### Some thoughts

A couple decisions I made:

- I went with SQLite, rather than PostgreSQL, as a database, because it's way easier to spin up locally, for you and me (I haven't yet installed PG on this laptop), and there was no PG functionality that I'd need here.
- I wrote limited tests.
  - Most of this this A) frontend, and B) integration with rock-solid but black-box APIs. I tend not to test components too aggressively, because it ends up being pretty brittle, and there wasn't much by way of computative functionality to test.
  - There was very little (to test) in the Rails app that wasn't boilerplate.
- I cut this off around 5/6 hours (not entirely sure -- I worked in a bunch of ~1h blocks).

The tech is pretty expected -- Rails, ruby-graphql, Apollo.

### Roadmap

If I were continuing to build this out, I'd focus on:

- Adding FundContact deletion.
- Adding FundContact creation.
- Creating a better UI for editable text. Currently, it just shows up as inputs.
- Either wrapping my head around a more idiomatic way to share Apollo-fetched data around the app (as in Redux), or integrating Redux into the app to do so, so I don't re-fetch data.
- Perhaps come up with a Funds page where they're ranked by relevance (the characteristics I've got here are Industry investment overlap and amount typically invested), as a useful starting point for this process.
- Seriously fix the testing:
  - Incorporate Enzyme in a way that centralizes adapter initialization (so I don't have to repeat it).
  - Move tests from collocated folders to their own directory. (Didn't try this, cause I wasn't sure if it was going to be a huge headeache involving ejecting the app.)
  - Look into a way to test Apollo queries/mutations.
- Changing some variable/field names.
- Abstracting out some functionality a bit further (ex: the Dropdowns/Inputs are general in terms of the fields they edit, but not the mutations they call).
