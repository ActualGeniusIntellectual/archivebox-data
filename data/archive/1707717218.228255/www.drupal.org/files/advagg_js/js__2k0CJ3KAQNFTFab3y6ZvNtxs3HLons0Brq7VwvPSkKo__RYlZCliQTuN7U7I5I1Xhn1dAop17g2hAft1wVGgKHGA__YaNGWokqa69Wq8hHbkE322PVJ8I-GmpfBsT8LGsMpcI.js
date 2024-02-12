(function () {
  "use strict";

  Drupal.behaviors.bringGitlabMetadata = {
    attach: function (context, settings) {
      // Replace jQuery with DOM object.
      if (context.jquery !== undefined) {
        context = context.get(0);
      }
      else if (context.constructor.name === 'Array' && context[0] instanceof Element) {
        context = context[0];
      }

      const gitlab_base_url = Drupal.settings.drupalorgGitlab.gitlab_base_url;
      const drupal_base_url = Drupal.settings.drupalorgGitlab.base_url;
      let links_count = 0;
      let url_params = new URLSearchParams();

      // First go through the obvious ones which have been preprocessed.
      for (let gitlab_issue_link of context.querySelectorAll('.drupalorg-gitlab-link')) {
        const link = new URL(gitlab_issue_link.getAttribute('href'), gitlab_base_url);
        url_params.append('links[]', link.href);
        gitlab_issue_link.setAttribute('href', link.href);
        links_count++;
      }

      // And then other project issues rendered by views, formatters... which might
      // be migrated but were not preprocessed.
      for (let drupal_issue_link of context.querySelectorAll('.project-issue-issue-link a')) {
        const link = new URL(drupal_issue_link.getAttribute('href'), drupal_base_url);
        url_params.append('links[]', link.href);
        drupal_issue_link.setAttribute('href', link.href);
        links_count++;
      }

      if (links_count) {
        fetch(Drupal.settings.basePath + 'drupalorg_issues_metadata?' + url_params)
        .then(response => response.json())
        .then(data => {
          for (const link in data) {
            if (data.hasOwnProperty(link)) {
              // If it has the triggering class, we want link substitution no matter what.
              context.querySelectorAll('.drupalorg-gitlab-link[href="' + link + '"]').forEach(function(new_format_link) {
                new_format_link.textContent = data[link].title;
                // Gitlab link. Use new classes.
                if ((data[link].link).includes(gitlab_base_url)) {
                  new_format_link.setAttribute('title', Drupal.t('Status: @status', {'@status': data[link].status}));
                  new_format_link.classList.add('drupalorg-gitlab-link-' + data[link].status);
                }
                // Drupal link. Use the old classes for styling.
                else if ((data[link].link).includes(drupal_base_url)) {
                  new_format_link.parentElement.classList.add('project-issue-status-info', 'project-issue-status-' + data[link].status);
                }
              });

              // Internal (migrated) links will have the href replaced too.
              context.querySelectorAll('.project-issue-issue-link a[href="' + link + '"]').forEach(function(old_format_link) {
                if ((data[link].link).includes(gitlab_base_url)) {
                  old_format_link
                    .setAttribute('title', Drupal.t('Status: @status', {'@status': data[link].status}))
                    .setAttribute('href', data[link].link);
                  old_format_link.textContent = data[link].title;
                  old_format_link.classList.add('drupalorg-gitlab-link', 'drupalorg-gitlab-link-' + data[link].status);
                  old_format_link.parentElement.classList.add('project-issue-issue-link');
                }
              })
            }
          }
        });
      }

      if (Drupal.settings.hasOwnProperty('gitlabRepository')) {
        // Get pipeline status information and favicon.
        const project_path = Drupal.settings.gitlabRepository.namespace + '/' + Drupal.settings.gitlabRepository.name;
        const latest_pipeline_endpoint = new URL(Drupal.settings.drupalorgGitlab.gitlab_base_url + '/api/v4/projects/' + encodeURIComponent(project_path) + '/pipelines/latest');
        url_params = new URLSearchParams();

        for (let pipeline_result of context.querySelectorAll('span.pipeline-result')) {
          url_params.set('ref', pipeline_result.dataset.version);
          fetch(latest_pipeline_endpoint + '?' + url_params)
            .then(response => {
              return response.json();
            })
            .then(pipeline => {
              if (pipeline.hasOwnProperty('id')) {
                const pipeline_span = document.querySelector('[data-version="' + pipeline.ref + '"]');
                // Replace span with favicon image with link to the pipeline.
                pipeline_span.innerHTML = Drupal.t('GitLab CI: ') +
                  '<a href="' + pipeline.web_url +
                  '" title="' + Drupal.t('Link to @status pipeline', {'@status': pipeline.status}) +
                  '"><img src="' + Drupal.settings.drupalorgGitlab.gitlab_base_url + pipeline.detailed_status.favicon + '" alt="' + Drupal.t('Status: @status', {'@status': pipeline.status}) +
                  '" /></a>' +
                  ' <a href="' + pipeline_span.dataset.repo + '/-/pipelines">' + Drupal.t('view all pipelines') + '</a>';
              }
            })
            .catch(e => {
            });
        }
      }
    }
  };
}());

;/*})'"*/
;/*})'"*/
